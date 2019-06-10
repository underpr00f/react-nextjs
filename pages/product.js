import { Layout } from '../components/Layout'

const Product = ({host, protocol, slug}) => {
  const title = "The product page"
  const description = "About to Next.js description"
  const pathname = '/'+slug
 
  return (
	<Layout 
	  title={title} 
	  description={description} 
	  protocol={protocol}
      host={host}
      pathname={pathname}>
  		<h1>{title} {slug}</h1>
  	</Layout>
  )
}

Product.getInitialProps = async function({query}) {
  const {slug, protocol, host} = query;	

  return {
  	// req: req,
  	slug: slug,
  	protocol: protocol,
  	host: host,
  };
};

export default Product