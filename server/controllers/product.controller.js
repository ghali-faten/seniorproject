

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

//UNCOMMENT IF USING MYSQL WITH CALLBACKS
const selectAll = function (req, res) {
  db.query("SELECT * FROM product", (err, products, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  });
};

const add = (req, res) => {
    const query = "INSERT INTO  product set ?" 
    console.log("body:", req.body )
    db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };

   const getOne = (req, res) => {
    const query = `SELECT * FROM product  where name = "${req.params.name}" `
    db.query(query,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };
  
   const update = (req, res) => {
    const query = `UPDATE product set ? where idproduct = ${req.params.id}` 
    db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };

   const remove = (req, res) => {
    const query = "delete from product where idproduct = ?"
    db.query(query,req.params.id,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };


 
   



module.exports = { selectAll, add, getOne, update, remove};