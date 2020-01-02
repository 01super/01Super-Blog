const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', 
      {
<<<<<<< HEAD
        "target": "http://o1super.cn",
=======
        "target": "http://localhost:8090",
>>>>>>> f2f5c883bbc2948929a99aee02a2d76ace9a93bc
        "changeOrigin": true,
      }
    )
  )
}
