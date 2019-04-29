import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ms } from 'modularscale-helpers'

import heroImage from "../../content/hero.jpg"

import Layout from "../components/layout"
import Metadata from "../components/metadata"
import Bio from "../components/bio"
import News from "../components/news"
import BlogPostList from "../components/blogpost/list"

const MainPage = styled.div`
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const BlogPosts = styled.div`
  width: calc(70% - ${ms(3)}rem);
  margin-right: ${ms(3)}rem;
  float: left;
`;

const AuthorInfo = styled.div`
  width: 30%;
  float: left;
`;

const HeroImage = styled.div`
  width: 100%;
  height: 20rem;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url(${heroImage});
`;

const SectionHeading = styled.h3`
  font-size: ${ms(2)}rem;
  font-weight: 500;
  box-sizing: border-box;

  ${props => !props.image ? '' : (`
    background-image: url(${props.image});
    background-size: contain;
    background-repeat: no-repeat;

    height: ${ms(2)}rem;
    padding-top: ${ms(2)}rem;
    overflow: hidden;
  `)}
`;

export default ({ data }) => ( 
  <Layout>
    <Metadata title="" />
    <MainPage>
      <HeroImage />
      <BlogPosts>
        <SectionHeading>Blog Posts</SectionHeading>
        <BlogPostList blogPostList={ data.allMarkdownRemark } />
      </BlogPosts>

      <AuthorInfo>
        <SectionHeading>About Phoebe</SectionHeading>
        <Bio type="vertical" />

        <SectionHeading>Recent News</SectionHeading>
        <News />
      </AuthorInfo>
    </MainPage>
  </Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      ...BlogPostList
    }
  }
`
