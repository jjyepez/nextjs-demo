const routes = module.exports = require('next-routes')()
 
routes
.add('index')
.add('upload')
.add('category','/category/:idCat', 'category' )
.add('preview','/preview/:id' )
.add('settings')
.add('profile')
.add('favs')
/*
.add('blog', '/blog/:slug')
.add('user', '/user/:id', 'profile')
.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: 'beta', pattern: '/v3', page: 'v3'})
*/