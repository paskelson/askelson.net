import React from 'react'
import { graphql, Link } from 'gatsby'
import { List, ListItem, ListTitle, ListDate, ListExcerpt } from './styles'

export default ({ blogPostList }) => (
    <List>
        {blogPostList.nodes.map( ({ fields, frontmatter, excerpt}) => (
            <ListItem>
                <Link to={ fields.slug }>
                    <ListTitle>{ frontmatter.title }</ListTitle>
                    <ListDate>{ frontmatter.date }</ListDate>
                    <ListExcerpt>{ excerpt }</ListExcerpt>
                </Link>
            </ListItem>
        ))}
    </List>
);

export const query = graphql`
    fragment BlogPostList on MarkdownRemarkConnection {
        nodes {
            excerpt
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`;