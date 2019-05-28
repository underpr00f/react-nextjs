import Fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'
const Home = ({bpi}) => {
  const title = "Welcome to Next.js"
  return (
      
    <Layout title={title}>
		  <div>
  	  	<h1>{title}</h1>
  			<p>Check current Bitcoin rate</p>
  			<Prices bpi={bpi} />
    	</div>
    </Layout>

  )
}
Home.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
}
export default Home