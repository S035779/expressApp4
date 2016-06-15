var express = require('express');
var session = require('express-session');
 
var app = express();
 
//セッション設定
app.use(session({
  secret : 'secretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));
   
//ルーティング設定
app.get('/memory-store-counter', function(req, res) {
  var session = req.session;
  if (session && session.count) {
    session.count++;
  } else {
     session.count = 1;
  }
  res.send('count is ' + session.count)
});
                      
app.listen(3000);
console.log('Server running at http://localhost:3000/');
