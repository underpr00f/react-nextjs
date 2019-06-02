import { Layout } from '../components/Layout'
import { PathUtil } from '../utils/PathUtil'

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
About.getInitialProps = async ({ req, pathname }) => {

  const pathValues = PathUtil(req, pathname)

  return {
    ...pathValues
  };
}

export default About