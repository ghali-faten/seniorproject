const router = require('express').Router();
const clientController = require("../controllers/client.controller");

router.get("/", clientController.selectAllClients);
router.post("/add", clientController.addClient);
router.get("/:email", clientController.getOneClient);
router.put('/update/:id', clientController.updateClient) ;
router.delete('/delete/:id', clientController.removeClient) ;
router.delete('/delete', clientController.removeAllClients) ;
router.get("/login", clientController.loginClient);



module.exports = router;
