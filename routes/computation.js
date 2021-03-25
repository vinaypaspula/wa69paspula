var express=require('express')
var router=express.Router();
var randomNumber=Math.floor(Math.random()*100)+1
var data=req.query.x

router.get('/',(req,res)=>{
    console.log(data)
    res.render('computation',{
        randSolution:`Cube root applied to ${randomNumber} is ${Math.cbrt(randomNumber)}`,
        querySolution:`Cube root applied to ${data} is ${Math.cbrt(data)}`
    })
})

module.exports=router