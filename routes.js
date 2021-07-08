const routes = require('next-routes')

module.exports = routes()
  .add('home', '/', 'home')
  .add('articles', '/articles', 'articles/list')
  .add('article', '/articles/:id', 'articles/show')
  .add('signin', '/auth/signin', '/auth/signin')
  .add('signup', '/auth/signup', '/auth/signup')
