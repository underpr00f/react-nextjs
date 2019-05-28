import { Layout } from '../components/Layout'

const About = () => {
  const title = "About to Next.js"
  return (
	  	
	<Layout title={title}>
		<div>
	  		<h1>{title}</h1>
	  		<p>
	  			About to Next.js!
		    </p>
    	</div>
    </Layout>

  )
}

export default About