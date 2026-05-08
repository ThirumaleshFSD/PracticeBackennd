const express=require('express');
const router=express.Router();
router.post('/regiter',(req,res)=>{
    res.send("User registered successfully");
})
export default router;