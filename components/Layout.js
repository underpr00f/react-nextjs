import Head from 'next/head'
import { Navbar } from './Navbar'

export const Layout = (props) => {
  return (
  	<div>
  		<Head>
  			<title>BitzPrice</title>
  			<link rel="shortcut icon" href="/static/favicon.ico"/>
  			<link rel="stylesheet"
  				href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
  		</Head>
  		<Navbar />
  		<div className="container">
  			{props.children}
  		</div>
  	</div>
  )
}
