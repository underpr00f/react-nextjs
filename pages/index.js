import fetch from 'isomorphic-unfetch'
import { Layout } from '../components/Layout'
import { Prices } from '../components/Prices'
import Error from 'next/error'
import { PathUtil } from '../utils/PathUtil'

import { withRouter } from 'next/router';
import Link from 'next/link'

const PostLink = ({id, linktitle}) => (
  <li>
    <Link as={`/p/${id}`} href={`/posts?title=${linktitle}`}>
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
        <PostLink id="posts" linktitle="Learn Next.js is awesome" />

  			<Prices bpi={bpi} />
    	</div>
    </Layout>

  )
});
Home.getInitialProps = async ({ req, pathname }) => {
  const pathValues = PathUtil(req, pathname)

  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  // const errorCode = res.statusCode > 200 ? res.statusCode : false
  const data = await res.json();

  return {
    ...pathValues,
    bpi: data.bpi,
  } 
   


}
export default Home