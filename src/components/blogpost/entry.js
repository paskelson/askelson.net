import React from "react"
import { graphql } from "gatsby"
import { Entry, EntryTitle, EntryInfo, EntryInfoDate, EntryInfoReadingTime, EntryPost } from "./styles"

export default ({ entry }) => (
    <Entry>
        <EntryTitle>{ entry.frontmatter.title }</EntryTitle>
        <EntryInfo>
            <EntryInfoDate>{ entry.frontmatter.date }</EntryInfoDate>
            <EntryInfoReadingTime>{ entry.timeToRead } minutes to read</EntryInfoReadingTime>
        </EntryInfo>
        <EntryPost dangerouslySetInnerHTML={{ __html: entry.html }} />
    </Entry>
);

export const query = graphql`
    fragment BlogPostEntry on MarkdownRemark {
        timeToRead
        html

        fields {
            slug
        }
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
        }
    }
`;