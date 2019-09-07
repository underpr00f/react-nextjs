const fetch = require('isomorphic-unfetch')

exports.getPosts = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const items = await res.json();
  return items.map(item => ({
    link: item.id // only returns the field I need to build a link
  }));
};