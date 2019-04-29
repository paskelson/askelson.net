import styled from "styled-components"
import titleImage from "../../../content/title.png"
import { ms } from "modularscale-helpers"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const SiteTitle = styled.span`
  /*
    The site title is in plain text, but we're going to hide it and replace it with the custom image.

    (Why not just insert the image directly? It helps screen-readers and robots understand the structure of the
    document when we use <h1>-<h6> vs a bunch of arbitrary images.)
  */
  background-image: url(${titleImage});

  /* Final size of site title. Doesn't necesarially have to match the image, which will be resized. */
  display: inline-block;
  width: 200px;
  height: 3rem;

  /* Hide the site title text so it can be replaced with an image. */
  box-sizing: border-box;
  overflow: hidden;
  font-size: 1px;
  padding-top: 3rem;
  margin-bottom: -1rem;

  /* Image should be constrained within the size, and not repeat. If one dimension is too small that will constrol. */
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Footer = styled.footer`
  font-size: ${ms(-1)}rem;
  color: ${props => props.theme.colors.light};
  margin-top: ${ms(3)}rem;
  margin-bottom: ${ms(3)}rem;
`;