const router = require("express").Router();
router.get("/test",(req,res,next)=>{ // test if valid token 
	res.json(req.user) // if valid token passport add the user data in [req.user] important !
})
module.exports = router;