const  express=require("express");
const { getalluser, login,signup } =require("../controllers/user-controller");

const router=express.Router();

router.get("/",getalluser);
router.post("/signup",signup);
router.post("/login",login);

module.exports=router;