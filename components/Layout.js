import Head from 'next/head'
import { Navbar } from './Navbar'
import { YMInitializer } from 'react-yandex-metrika';

export const Layout = (props) => {
  return (
  	<div>
  		<Head>
  			<title>BitzPrice</title>
  			<link rel="shortcut icon" href="/static/favicon.ico"/>
  			<link rel="stylesheet"
  				href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
  			<meta name="yandex-verification" content="2caec29c5a9588c9" />
	  		<YMInitializer
	            accounts={[53773633]}
	            version="2"
	            options={{
	              clickmap: true,
	              trackLinks: true,
	              accurateTrackBounce: true,
	              webvisor: true
	            }}
	          />
  		</Head>
  		<Navbar />
  		<div className="container">

  			{props.children}
  		</div>
  	</div>
  )
}
