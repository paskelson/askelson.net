import React from "react"
import moment from "moment"
import { useStaticQuery, graphql } from "gatsby"
import { List, Item, Title, Date, Link } from "./styles"


export default () => {
    const { news } = useStaticQuery(graphql`
        query {
            news: allNewsYaml(sort: {fields: [date]}) {
                nodes {
                    title
                    date
                    link
                }
            }
        }
    `);

    return (
        <List>
            {news.nodes.map(({ title, date, link }) => (
                <Item>
                    <Link href={ link } target="_blank" rel="noopener noreferrer">
                        <Title>{ title }</Title>
                        <Date>{ moment(date).format('MMMM YYYY') }</Date>
                    </Link>
                </Item>
            ))}
        </List>
    )
}