import { Layout } from '../components/Layout'

const About = ({absoluteUrl}) => {
  const title = "About to Next.js"
  const description = "About to Next.js description"
  console.log(absoluteUrl)	  
  return (
	  	
	<Layout title={title} description={description} url={absoluteUrl}>
		<div>
	  		<h1>{title}</h1>
	  		<p>{description}</p>
    	</div>
    </Layout>

  )
}
About.getInitialProps = async ({ req }) => {
  let protocol = 'https:'
  let host = req ? req.headers.host : window.location.hostname
  let pathname = "/about"

  if (host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }

  let absoluteUrl = protocol+"//"+host+pathname
  
  return {
    absoluteUrl: absoluteUrl,
  };
}

export default About