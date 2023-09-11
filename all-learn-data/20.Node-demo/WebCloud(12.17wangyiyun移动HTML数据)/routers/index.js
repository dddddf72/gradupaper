const router = require("koa-router")();
const webfirstpage = require("../controllers/webfirstpage")
const detail = require("../controllers/detail")
const search = require("../controllers/search")
router.get("/webfirstpage",webfirstpage)
router.get("/detail",detail)
router.get("/search",search)
module.exports = router;