const router = require("koa-router")();
const firstpage = require("../controllers/firstpage")
const detail = require("../controllers/detail")
const search = require("../controllers/search")
const firstpage1 = require("../controllers/firstpage1")
router.get("/firstpage",ctx=>{
    ctx.body=firstpage1;
})
router.get("/detail",detail)
router.get("/search",search)
module.exports = router;