const Product = ({headers, params}) => {
  console.log(headers.referer, params)   
  return <h1>The product page</h1>
}

Product.getInitialProps = async function({req}) {
  const { params, headers } = req

  return {
  	headers: headers,
  	params: params,
  };
};

export default Product