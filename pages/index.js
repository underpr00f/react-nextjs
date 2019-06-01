import Fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'
const Home = ({absoluteUrl, bpi}) => {
  const title = "Welcome to Next.js"
  const description = "Check current Bitcoin rate"

  return (
      
    <Layout title={title} description={description} url={absoluteUrl}>
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
  if (host==="localhost") {
    protocol = 'http:'
  }    
  let absoluteUrl = protocol+"//"+host+pathname

  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi,
    absoluteUrl: absoluteUrl,
  };
}
export default Home