import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { ms } from "modularscale-helpers"
import Gallery from "react-photo-gallery"

import Layout from "../components/layout"
import Metadata from "../components/metadata"

const GallerySection = styled.article`
  padding-bottom: ${ms(3)}rem;
`;

const SectionHeading = styled.h3`
  font-family: ${props => props.theme.font.title};
  font-size: ${ms(3)}rem;
  font-weight: 500;
  margin-bottom: ${ms(0)}rem;
`;

const SectionLink = styled.a`
  font-size: ${ms(-1)}rem;
  font-weight: 400;
  color: ${props => props.theme.colors.light};
  margin-left: ${ms(-3)}rem;
`;

const photosToGroups = (photos) => {
  const photoGroups = {};
  photos.forEach((photo) => {
    const directory = photo.public_id.split('/')[1].split(' ').slice(1).join(' ');
    if (typeof(photoGroups[directory]) === 'undefined') photoGroups[directory] = [];
    photoGroups[directory].push({
      src: photo.secure_url.replace('/upload/', '/upload/w_300,h_300,c_limit/'),
      srcOriginal: photo.secure_url,
      width: photo.width/1000,
      height: photo.height/1000,
    });
  })

  return photoGroups;
}

export default ({ data }) => {
  const groups = photosToGroups(data.media.nodes);

  return(
    <Layout>
      <Metadata title="" />
      {Object.keys(groups).map((groupName) => (
        <GallerySection>
          <SectionHeading>
            { groupName }
            <SectionLink href={`#${groupName.replace(/\W/g, '-').toLowerCase()}`} name={groupName.replace(/\W/g, '-').toLowerCase()}>(link)</SectionLink>
          </SectionHeading>
          
          <Gallery
            photos={ groups[groupName] } targetRowHeight={150}
            onClick={ (e, obj) => typeof(window) !== 'undefined' ? window.open(obj.photo.srcOriginal, "_blank") : null } />
        </GallerySection>
      ))}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    media: allCloudinaryMedia(sort: {fields: public_id, order:DESC}) {
      nodes {
        internal {
          description
        }
        secure_url
        public_id
        width
        height
      }
    }
  }
`
