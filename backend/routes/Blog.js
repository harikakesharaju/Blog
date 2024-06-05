const express=require("express")
const { getallblogs, updateblog, getBlogId, delblog, addBlog,getByuserId } =require('../controllers/blog-controller');


const blogrouter=express.Router();



blogrouter.get("/",getallblogs);
blogrouter.post("/add",addBlog);
blogrouter.put('/update/:id',updateblog);
blogrouter.get("/:id",getBlogId);
blogrouter.delete("/:id",delblog);
blogrouter.get('/user/:id',getByuserId);

module.exports=blogrouter