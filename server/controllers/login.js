const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL');
  });


const Client = {
    register: (clientData, callback) => {
  
      bcrypt.hash(clientData.password, 10, (err, hash) => {
        if (err) {
          return callback(err);
        }
  
        const query = 'INSERT INTO client (email, password) VALUES (?, ?)';
        db.query(query, [clientData.email, hash], (err) => {
          if (err) {
            return callback(err);
          }
          return callback(null);
        });
      });
    },
    login: (email, password, callback) => {
      const query = 'SELECT * FROM client WHERE idClient = ?';
      db.query(query, [email], (err, results) => {
        if (err) {
          return callback(err);
        }
        if (results.length === 0) {
          return callback(null, null); // User not found
          
        }
        bcrypt.compare(password, results[0].password, (err, match) => {
          if (err) {
            return callback(err);
          }
          if (!match) {
            return callback(null, null); // Incorrect password
            
          }
          if (match) {
                    return (token)
            };
  
          const token = jwt.sign({ idClient: results[0].id, Client }, "ohohoh", {
            expiresIn: '1h',
          });
          return callback(null, token);
        });
      });
    },
  };
  
  module.exports = Client;
  
  