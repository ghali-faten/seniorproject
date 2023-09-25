const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/", itemController.selectAll);
router.post("/add", itemController.add);
router.get("/:name", itemController.getOne);
router.put('/update/:id', itemController.update) ;
router.delete('/delete/:id', itemController.remove) ;



module.exports = router;
