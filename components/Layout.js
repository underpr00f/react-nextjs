import Head from 'next/head'
import { Navbar } from './Navbar'
import { YandexMetrika } from '../utils/YandexMetrika'

const defaultDescription = "Course bitcoin, example SSR site, react nextjs"
const defaultOGURL = "https://underproof-react-nextjs.netlify.com"
const defaultTitle = "Welcome to Next.js"
const environment = process.env.NODE_ENV


export const Layout = ({title, protocol, host, pathname, description, children}) => {
  let absoluteUrl = host ? protocol+"//"+host+pathname : defaultOGURL+pathname
  
  let faviconPath = "/favicon.png"
  if (environment === "development") {
    faviconPath = "/static/favicon.png"
  } 

  return (
  	<div>
  		<Head>
  			<title>{title}</title>
  			<link rel="shortcut icon" href={`${faviconPath}`} type="image/png"/>
  			<link rel="stylesheet"
  				href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
  			<meta name="yandex-verification" content="2caec29c5a9588c9" />
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" 
          content="netlify, underproof, курс, биткоин, Россия, дизайн, проект, стоимость, цена, некст, nextjs, реакт, reactjs" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl || defaultOGURL} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta name="og:description" content={description || defaultDescription} />
        {environment !== "development" ? <YandexMetrika /> : null}
  		</Head>
  		<Navbar />
  		<div className="container">
  			{children}
  		</div>
  	</div>
  )
}
