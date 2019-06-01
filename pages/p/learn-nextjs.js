import { Layout } from '../../components/Layout'
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router';

const PostElement = withRouter(({protocol, host, pathname, show, router}) => {
  // console.log(show)
  const title = "Welcome to Batman"
  const description = "Check Batman films"
  return (
    <Layout
        title={title} 
        description={description} 
        protocol={protocol}
        host={host}
        pathname={pathname}>
      <h1>{show.name}</h1>
      <p>{show && show.summary && show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show && show.image && show.image.medium} />
    </Layout>
  )
});

PostElement.getInitialProps = async function(context) {
  console.log(context)
  // let protocol = 'https:'
  // let pathname = ""

  // let host = req ? 
  //   req.headers && req.headers.host      
  //   : window.location.hostname
  
  // if (host && host.indexOf('localhost') > -1) {
  //   protocol = 'http:'
  // }   
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return {
    // errorCode: errorCode,
    show: show,
    // host: host,
    // protocol: protocol,
    // pathname: pathname
  } 
};

export default PostElement;

// import { Layout } from '../../components/Layout'
// import { withRouter } from 'next/router';

// const LearnNextJs = withRouter(({protocol, host, pathname}) => {
//   const title = "Learn to Next.js"
//   const description = "Learn to Next.js description"

//   return (
	  	
// 	<Layout 
// 	  title={title} 
// 	  description={description} 
// 	  protocol={protocol}
//       host={host}
//       pathname={pathname}>
// 		<div>
// 	  		<h1>{title}</h1>
// 	  		<p>{description}</p>
//     	</div>
//     </Layout>

//   )
// });
// LearnNextJs.getInitialProps = async ({ req }) => {
//   let protocol = 'https:'
//   let host = req ? 
//   	req.headers && req.headers.host  	   
//   	: window.location.hostname
//   let pathname = "/learn-nextjs"

//   if (host && host.indexOf('localhost') > -1) {
//     protocol = 'http:'
//   }

//   return {
//     host: host,
//     protocol: protocol,
//     pathname: pathname
//   };
// }

// export default LearnNextJs