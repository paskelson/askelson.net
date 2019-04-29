import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ description, meta, title }) => {
  const { config } = useStaticQuery(
    graphql`
      query {
        config: configYaml {
          siteTitle
          author {
            twitter
          }
          bio
        }
      }
    `
  )

  const metaDescription = description || config.bio;
  const metaTitle = title || config.siteTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-US'
      }}
      title={ title || config.siteTitle }
      titleTemplate={title ? `%s ~ ${config.siteTitle}` : `%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@${config.author.twitter}`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(meta || [])}
    />
  )
}
