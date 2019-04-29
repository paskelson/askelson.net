import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { IconContext } from "react-icons";
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../../theme"
import { Wrapper, SiteTitle, Footer } from "./styles"

export default ({ children }) => {
  const { config } = useStaticQuery(graphql`
    query {
      config: configYaml {
        siteTitle
        author {
          name
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={ theme }>
      <IconContext.Provider value={{ color: theme.colors.fg, className: "icon" }}>
        <Wrapper>
          <GlobalStyle />
          <header>
            <h1><Link to="/"><SiteTitle>{ config.siteTitle }</SiteTitle></Link></h1>
          </header>

          {children}

          <Footer>&copy; 2017-{(new Date()).getFullYear()} { config.author.name }.</Footer>
        </Wrapper>
      </IconContext.Provider>
    </ThemeProvider>
  );
}