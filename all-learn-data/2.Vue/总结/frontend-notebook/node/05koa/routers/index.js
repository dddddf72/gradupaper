const router = require("koa-router")();
var evaluate = require("../controllers/evaluate")
var list = require("../controllers/list")
var search = require("../controllers/search")
router.get("/list", list)
router.get("/evaluate",evaluate)
router.get("/search",search)
module.exports = router;