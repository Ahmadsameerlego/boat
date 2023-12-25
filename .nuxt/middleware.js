const middleware = {}

middleware['auth'] = require('../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['indexMiddleWare'] = require('../middleware/indexMiddleWare.js')
middleware['indexMiddleWare'] = middleware['indexMiddleWare'].default || middleware['indexMiddleWare']

middleware['trailingSlashRedirect'] = require('../middleware/trailingSlashRedirect.js')
middleware['trailingSlashRedirect'] = middleware['trailingSlashRedirect'].default || middleware['trailingSlashRedirect']

middleware['userAuth'] = require('../middleware/userAuth.js')
middleware['userAuth'] = middleware['userAuth'].default || middleware['userAuth']

export default middleware
