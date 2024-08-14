const express = require ('express')

const authSchema = require('../model/auth')

const authRoute = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

 const {registerValidation,loginValidtaion,validation} = require('../middelware/RegisterValidator')

const {isAuth} = require('../middelware/isAuth')
//http://localhost:4000/auth/register    => register tdkhlin infoi mte3 el user 
authRoute.post('/register',registerValidation,validation,async(req,res)=>{
try{

    const {name,email,password}= req.body
//est ce que le user hedheka deja mwjoud ou nn ? 
const fondAuth = await authSchema.findOne({email})
if(fondAuth){return res.status(404).json({msg:"el user hedheka rahou deja msejel imchi li login"})}
    const newauth = await new authSchema(req.body)
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    newauth.password = hash 
    newauth.save()
    res.status(200).json({msg:"el user dkhel c bon ",newauth})

}catch(err){
    console.log(err)
}

})



//http://localhost:4000/auth/login

authRoute.post('/login',loginValidtaion,validation  ,async(req,res)=>{
    try{
        const {email,password} = req.body 
//mouhetha email el user 
        const fondAuth = await authSchema.findOne({email})
        if(!fondAuth){return res.status(404).json({msg:"el user hedheka mahouch mwjoud imchi lil register w 9ayed , register "})}

//mouhemtha mte3 el mdp 
        const match = await bcrypt.compare(password , fondAuth.password)
        if (!match){return res.status(404).json({msg:" rak ghalit fil mdp arj3 chouf oumourek "})}

const payload = {id: fondAuth._id}

var token = jwt.sign(payload,process.env.privateKey )

res.status(200).json({msg:"ur welcome ya mara7be ", token , fondAuth})

    }catch(err){
        console.log(err)
    }
})



//http://localhost:4000/auth/account
//hedha lien path mte3 jiben el user 

authRoute.get('/account',isAuth,async(req,res)=>{
    try{
res.send(req.user)
    }catch(err){
        console.log(err)
    }
})





module.exports= authRoute