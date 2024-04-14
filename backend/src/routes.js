const router = require("express").Router();

const {
  findAll,
  create,
  updated,
  findOne,
  deleteOne,
} = require("./controllers/task.controller");

router.get("/tasks", findAll);
router.get("/task/:id", findOne);
router.post("/tasks", create);
router.put("/tasks/:id", updated);
router.delete("/task/:id", deleteOne);

module.exports = router;
