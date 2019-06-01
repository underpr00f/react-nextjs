import fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'


const Home = ({protocol, host, pathname, bpi}) => {
  const title = "Welcome to Next.js"
  const description = "Check current Bitcoin rate"

  return (
      
    <Layout 
      title={title} 
      description={description} 
      protocol={protocol}
      host={host}
      pathname={pathname}
      >
		  <div>
  	  	<h1>{title}</h1>
  			<p>{description}</p>
  			<Prices bpi={bpi} />
    	</div>
    </Layout>

  )
}
Home.getInitialProps = async ({ req }) => {
  let protocol = 'https:'
  let pathname = ""

  let host = req ? 
    req.headers && req.headers.host      
    : window.location.hostname
  
  if (host && host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }   

  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi,
    host: host,
    protocol: protocol,
    pathname: pathname
  };
}
export default Home