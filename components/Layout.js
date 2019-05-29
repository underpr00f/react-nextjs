import Head from 'next/head'
import { Navbar } from './Navbar'
import { YandexMetrika } from '../utils/YandexMetrika'
// import { YMInitializer } from 'react-yandex-metrika';
{/*<YMInitializer
      accounts={[53773633]}
      version="2"
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      }}
    />*/}
// function YM() = {
//     return {
//              __html: `
//     <script type="text/javascript" >
//      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//      ym(53773633, "init", {
//           clickmap:true,
//           trackLinks:true,
//           accurateTrackBounce:true,
//           webvisor:true
//      });
//   </script>
//   <noscript><div><img src="https://mc.yandex.ru/watch/53773633" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
//           `
//     };
// };


export const Layout = ({title, children}) => {


  return (
  	<div>
  		<Head>
  			<title>{title}</title>
  			<link rel="shortcut icon" href="/static/favicon.ico"/>
  			<link rel="stylesheet"
  				href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
  			<meta name="yandex-verification" content="2caec29c5a9588c9" />
        <meta name="description" content="Course bitcoin, example SSR site, react nextjs" />
        <YandexMetrika />
  		</Head>
  		<Navbar />
  		<div className="container">

  			{children}
  		</div>
  	</div>
  )
}
