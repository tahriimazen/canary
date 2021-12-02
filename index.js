//les definition
const express = require('express');
const app = express();
const path = require('path')
const port = 3000





//configuration
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "canary",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const handlebars = require('express-handlebars');
const hbs = handlebars.create({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');





//code 
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render("main",
    
    {
      layout:"index"
    });
})
app.get('/signin', (req, res) => {
    res.render("signin",
    
    {
      layout:"index"
    });
})
app.get('/signup', (req, res) => {
    res.render("signup",
    
    {
      layout:"index"
    });
})
app.get('/profile/:username', (req, res) => {

    console.log(req.params.username);
    con.query("SELECT * FROM user WHERE user_name =?", req.params.username, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.render('profile',
         {
           layout : "index",
           userinfo : result
         });
      });
   
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
