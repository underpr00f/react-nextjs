import fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'
import Error from 'next/error'

import { withRouter } from 'next/router';
import Link from 'next/link'

const PostLink = ({id, linktitle}) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?title=${linktitle}`}>
      <a>{linktitle}</a>
    </Link>
  </li>
);

const Home = withRouter(({protocol, host, pathname, bpi, router}) => {
  const title = "Welcome to Next.js"
  const description = "Check current Bitcoin rate"

  // if (errorCode) {
  //   console.log(errorCode)
  //   return <Error errCode={errorCode} />
  // }
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
        <PostLink id="learn-nextjs" linktitle="Learn Next.js is awesome" />
    	</div>
    </Layout>

  )
});
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
  // const errorCode = res.statusCode > 200 ? res.statusCode : false
  const data = await res.json();

  return {
    // errorCode: errorCode,
    bpi: data.bpi,
    host: host,
    protocol: protocol,
    pathname: pathname
  } 
   


}
export default Home