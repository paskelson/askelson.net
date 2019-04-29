import React from "react"

import Layout from "../components/layout"
import Metadata from "../components/metadata"

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <Metadata title="Not found!" />
        <h1>Not found!</h1>
        <p>The page you're looking for doesn&#39;t exist... such sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage