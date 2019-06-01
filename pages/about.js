import { Layout } from '../components/Layout'

const About = ({protocol, host, pathname}) => {
  const title = "About to Next.js"
  const description = "About to Next.js description"

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
About.getInitialProps = async ({ req }) => {
  let protocol = 'https:'
  let host = req ? 
  	req.headers && req.headers.host  	   
  	: window.location.hostname
  let pathname = "/about"

  if (host && host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }

  return {
    host: host,
    protocol: protocol,
    pathname: pathname
  };
}

export default About