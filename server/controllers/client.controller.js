 const db = require("../database-mysql");
 const bcrypt = require('bcrypt');  
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser') 
const dotenv = require('dotenv');
// get config vars
dotenv.config();


const selectAllClients = (req, res) => {
  db.query("SELECT * FROM client", (err, clients, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(clients);
    }
  });
};

const addClient = (req, res) => {
  const query = "INSERT INTO client SET ?";
  const newClient = req.body;

  bcrypt.hash(newClient.password, 10, (hashErr, hashedPassword) => {
    if (hashErr) {
      res.status(500).send(hashErr);
    } else {
      newClient.password = hashedPassword;
      db.query(query, newClient, (dbErr, result) => {
        dbErr ? res.status(500).send(dbErr) : res.status(200).send(result);
      });
    }
  });
};

const updateClient = (req, res) => {
  const query = `UPDATE client SET ? WHERE idclient = ${req.params.id}`;
  const updatedClient = req.body;


  if (updatedClient.Password) {
    bcrypt.hash(updatedClient.Password, 10, (hashErr, hashedPassword) => {
      if (hashErr) {
        res.status(500).send(hashErr);
      } else {
        updatedClient.Password = hashedPassword;
        db.query(query, updatedClient, (dbErr, result) => {
          dbErr ? res.status(500).send(dbErr) : res.status(200).send(result);
        });
      }
    });
  } else {
    // Si le mot de passe n'est pas modifié, effectuez simplement la mise à jour sans hachage
    db.query(query, updatedClient, (dbErr, result) => {
      dbErr ? res.status(500).send(dbErr) : res.status(200).send(result);
    });
  }
};


const removeClient = (req, res) => {
  const query = "DELETE FROM client WHERE idclient = ?";
  db.query(query, req.params.id, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result);
  });
};

const loginClient= (req, res) => {
  const { email, Password } = req.body;

  const query = "SELECT * FROM client WHERE idClient = ?";
  db.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length === 0) {
        res.status(401).send("User not found");
        console.log("User not found")
      } else {
        const client = result[0];

        bcrypt.compare(Password, client.Password, (bcryptErr, bcryptResult) => {
          if (bcryptErr) {
            res.status(500).send(bcryptErr);
          } else {
            if (bcryptResult) {
              // L'authentification a réussi, vous pouvez renvoyer l'ID du client.
              const idClient = client.Id;
              res.status(200).json({ idClient });
            } else {
              res.status(401).send("Incorrect Password");
              console.log("Incorrect Password")
            }
          }
        });
      }
    }
  });
};


const getOneClient = (req, res) => {
  const query = `SELECT * FROM client WHERE email = "${req.params.email}"`;
  db.query(query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result);
  });
};
const removeAllClients = (req, res) => {
  const query = "DELETE FROM client";
  db.query(query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result);
  });
};

module.exports = {
  selectAllClients,
  addClient,
  updateClient,
  removeClient,
  loginClient,
  getOneClient,
  removeAllClients,
};