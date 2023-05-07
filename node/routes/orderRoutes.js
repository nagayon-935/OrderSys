"use strict";

const router = require("express").Router(),
    orderController = require("../controllers/orderController");

router.get("/", orderController.read);
router.post("/", orderController.create);
// router.put("/:id", orderController.update);
// router.delete("/:id", orderController.delete);

module.exports = router;
// 