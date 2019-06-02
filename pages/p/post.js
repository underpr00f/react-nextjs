import { Layout } from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';
import { PathUtil } from '../../utils/PathUtil'

const Post = withRouter(({protocol, host, pathname, show, router}) => {
  const title = show.name || "404 Undefined"
  const description = show.name+"'s description" || "Page not found"
  return (
    <Layout
        title={title} 
        description={description} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
      <h1>{show.name}</h1>
      <p>{show && show.summary && show.summary.replace(/<[/]?p>/g, '') || show.message}</p>
      <img src={show && show.image && show.image.medium} />
    </Layout>
  )
});

Post.getInitialProps = async function({req, query, pathname}) {
  const pathValues = PathUtil(req, pathname)

  const { title } = query;
  const res = await fetch(`https://api.tvmaze.com/shows/${title}`);
  const show = await res.json();

  return {
    ...pathValues,
    show: show,
  } 
};

export default Post;
