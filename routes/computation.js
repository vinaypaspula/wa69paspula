var express=require('express')
var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        randSolution:`Cube root applied to ${randomNumber} is ${Math.cbrt(randomNumber)}`,
        querySolution:`Cube root applied to ${data} is ${Math.cbrt(data)}`
    })
})

module.exports=router