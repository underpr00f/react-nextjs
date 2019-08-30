import React from 'react'
import { Layout } from '../components/Layout'
import { PathUtil } from '../utils/PathUtil'

class Error extends React.Component {
  static getInitialProps({ res, err, errCode, req, pathname }) {
    const pathValues = PathUtil(req, pathname)

    return { 
      ...pathValues
      }
  }

  render() {
    const title = "404 Next.js"
            ? `An error 404 occurred on server`
            : 'An error occurred on client'
    const {protocol, host, pathname} = this.props
    return (
      <Layout
        title={title} 
        description={'404'} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
        <div>
          <h1>{title}</h1>
          <p>404</p>
        </div>
      </Layout>
    )
  }
}

export default Error