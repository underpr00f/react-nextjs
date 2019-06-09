import { Layout } from '../components/Layout'
import { PathUtil } from '../utils/PathUtil'

const About = ({protocol, host, pathname}) => {
  const title = "About to Next.js"
  const description = "About to Next.js description"

  return (
	  	
	<Layout 
	  title={title} 
	  description={description} 
	  protocol={protocol}
      host={host}
      pathname={pathname}>
		<div>
	  		<h1>{title}</h1>
	  		<p>{description}</p>        
    </div>
      <div className="contacts text-center" itemScope itemType="http://schema.org/Organization">
        <h2 itemProp="name">Underproof's company</h2>
        <p>Call me</p>
        <div className="col-lg-4" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <ul className="contacts-list">
              <li className="contacts-list__item"><span itemProp="addressLocality">Stavropol</span>, <span itemProp="streetAddress">Lenin-street, 14</span></li>
              <li className="contacts-list__item">Postal Code: <span itemProp="postalCode">119021</span></li>
              <li className="contacts-list__item"><a href="tel:+76523123344" className="contacts-list__link" rel="nofollow" target="_self" itemProp="telephone">+7 652 312 33 44</a></li>
              <li className="contacts-list__item">Fax:<span itemProp="faxNumber">+7 652 312 33 44</span></li>
              <li className="contacts-list__item">Email: <span itemProp="email">pr@yandex.ru</span></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
About.getInitialProps = async ({ req, pathname }) => {

  const pathValues = PathUtil(req, pathname)

  return {
    ...pathValues
  };
}

export default About