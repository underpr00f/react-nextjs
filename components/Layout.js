import Head from 'next/head'
import { Navbar } from './Navbar'
import { YandexMetrika } from '../utils/YandexMetrika'

export const Layout = ({title, children}) => {
  return (
  	<div>
  		<Head>
  			<title>{title}</title>
  			<link rel="shortcut icon" href="/static/favicon.png" type="image/png"/>
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
