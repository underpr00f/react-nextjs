import { PathUtil } from '../utils/PathUtil'

const Product = ({slug}) => {   

  return <h1>The product page {slug}</h1>

}

Product.getInitialProps = async function({req, query, pathname}) {

  return {
    slug: query.slug
  };
};

export default Product