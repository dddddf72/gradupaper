const router = require("koa-router")()
const index = require("../controllers/index")
const detail = require("../controllers/detail")
router.get("/",index)
router.get("/subject/:id",detail)
module.exports = router;
