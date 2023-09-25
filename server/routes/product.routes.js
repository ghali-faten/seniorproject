const router = require('express').Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.selectAll);
router.post("/add", productController.add);
router.get("/:name", productController.getOne);
router.put('/update/:id', productController.update) ;
router.delete('/delete/:id', productController.remove) ;



module.exports = router;
