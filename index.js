const express = require('express')
const path = require('path')
const app = express()
const port = 3000
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

//ay 7aja tet7at f dossier public 
app.use(express.static('public'))
//import html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signin.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'))
})
app.get('/profile/:username', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/profile.html'))
    console.log(req.params.username);
    con.query("SELECT * FROM user WHERE user_name =?", req.params.username, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})