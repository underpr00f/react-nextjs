import Fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'
const Home = ({bpi}) => {
  return (
  	
	<Layout>
		<div>
	  		<h1>Welcome to Next.js!</h1>
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