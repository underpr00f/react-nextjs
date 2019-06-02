export const PathUtil = (req, pathname) => {
  let protocol = 'https:'

  // let path = pathname ? pathname : ""
  let host = req ? 
    req.headers && req.headers.host      
    : window.location.hostname
  
  if (host && host.indexOf('localhost') > -1) {
    protocol = 'http:'
  } 

  return {
  	host: host,
    protocol: protocol,
    pathname: pathname
  }
}