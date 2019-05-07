import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Metadata from "../components/metadata"

import ox from "./404.jpg"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <Metadata title="Not found!" />
        <img src={ ox } alt="A confused ox" style={{maxWidth: "400px", marginTop: "2rem"}} />
        <h1>Not found!</h1>
        <p>The page you're looking for doesn&#39;t exist... such sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
