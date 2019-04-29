import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper, Bio, BioImage, Links, LinkItem, Link, LinkText } from "./styles"
import * as Icons from "react-icons/fa"

import headshot from "../../../content/headshot.jpg"

export default ({ type }) => {
    const { config } = useStaticQuery(graphql`
        query {
            config: configYaml {
                bio
                links {
                    title
                    icon
                    link
                }
            }
        }
    `);

    const showLinks = type === "vertical";
    const showImage = type === "horizontal";

    return (
        <Wrapper>
            {!showImage ? '' : (
                <BioImage src={ headshot } />
            )}
            <Bio float={ showImage } light={ type === "horizontal" }>
                <p>{ config.bio }</p>
            </Bio>

            {!showLinks ? '' : (<div>
                <Links>
                    {config.links.map(({ title, icon, link }) => {
                        const Icon = Icons[`Fa${icon.charAt(0).toUpperCase() + icon.slice(1)}`];
                        return <LinkItem>
                            <Link href={ link } target="_blank" rel="noopener noreferrer"><Icon /> <LinkText>{ title }</LinkText></Link>
                        </LinkItem>
                    })}
                </Links>
            </div>)}
        </Wrapper>
    )
}