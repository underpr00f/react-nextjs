import { Layout } from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { PathUtil } from '../utils/PathUtil'

const Posts = ({protocol, host, pathname, shows}) => {
  const title = "Batman TV Shows"
  const description = "Check Batman films"
  return (      
    <Layout
        title={title} 
        description={description} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
      <h1>{title}</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href={`/posts/post?title=${show.id}`} as={`/posts/post/${show.id}`} >
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
};

Posts.getInitialProps = async function({req, pathname}) {
  const pathValues = PathUtil(req, pathname)
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    ...pathValues,
    shows: data.map(entry => entry.show)
  };
};

export default Posts;