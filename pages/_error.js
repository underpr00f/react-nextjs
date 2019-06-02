import React from 'react'
import { Layout } from '../components/Layout'
import { PathUtil } from '../utils/PathUtil'

class Error extends React.Component {
  static getInitialProps({ res, err, errCode, req, pathname }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : errCode ? errCode : null
    const pathValues = PathUtil(req, pathname)

    return { 
      ...pathValues,
      statusCode }
  }

  render() {
    const title = "404 Next.js"
    const description = statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'
    const {protocol, host, pathname, statusCode} = this.props
    return (
      <Layout
        title={title} 
        description={description} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Layout>
    )
  }
}

export default Error