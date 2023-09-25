const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'fatenghali',
  database : 'store'
});

connection.connect((err)=>{
  err ? console.log(err) :
  console.log("Connected to MySQL");
})



module.exports = connection;