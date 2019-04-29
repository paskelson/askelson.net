import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ms } from "modularscale-helpers"

import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Entry from "../components/blogpost/entry"
import Bio from "../components/bio"

const BioWrapper = styled.section`
  max-width: 40rem;
  &:before {
    content: "";
    display: block;
    margin: ${ms(3)}rem 0;
    border-top: 1px solid ${props => props.theme.colors.lighter};
  }
  p:first-child {
    margin-top: 0;
  }
`;

export default ({ data }) => (
  <Layout>
    <Metadata
      title={ data.entry.frontmatter.title }
      description={ data.entry.excerpt }
    />

    <Entry entry={ data.entry } />

    <BioWrapper>
      <Bio type="horizontal" />
    </BioWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    entry: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
      }

      ...BlogPostEntry
    }
  }
`
