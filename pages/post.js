import { Layout } from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Post = ({protocol, host, pathname, shows}) => {
  const title = "Welcome to Batman"
  const description = "Check Batman films"
  return (      
    <Layout
        title={title} 
        description={description} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
};

Post.getInitialProps = async function({req}) {
  let protocol = 'https:'
  let pathname = ""

  let host = req ? 
    req.headers && req.headers.host      
    : window.location.hostname
  
  if (host && host.indexOf('localhost') > -1) {
    protocol = 'http:'
  }  
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Post;