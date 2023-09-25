const express = require("express");
const itemRoutes = require('./routes/item.routes')
const clientRoutes = require('./routes/client.routes')
const productRoutes = require('./routes/product.routes')
const cors= require ('cors')
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser')


const db = require('./database-mysql')

const app = express();
const PORT = process.env.PORT || 3000

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/item", itemRoutes);
app.use("/api/client", clientRoutes);
app.use("/login", clientRoutes);
app.use("/api/product", productRoutes)

process.env.TOKEN_SECRET;

const secretKey = "ohohoh"
const createToken = (req, res, next)=>{
  const client = {email: req.body.email}
  jwt.sign(client, secretKey, (err, result)=>{
    if(err){
      console.log(err)
    }
    res.send(result)
  })
    next()
    }

app.post('/login',createToken, (req, res) => {
  const token = generateAccessToken(client);
    res.json(token);
})


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
