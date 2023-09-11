const router = require("koa-router")();
const evaluate = require("../controllers/evaluate")
const list = require("../controllers/list")
const search = require("../controllers/search")
router.get("/evaluate",evaluate)
router.get("/list",list)
router.get("/search",search)
module.exports = router;