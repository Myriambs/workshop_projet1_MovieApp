import React,{useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './register.css'


const Login = () => {

  const navigate = useNavigate()

const [password,setPassword]=useState('')
const [email,setEmail]=useState('')

const handelLogin=async(values)=>{
try{
  const res = await axios.post('http://localhost:4000/auth/login',values)
  console.log("res=>",res)
 await localStorage.setItem('token',res.data.token)
 navigate('/private')
}catch(err){
  console.log(err)
}
}

  return (
    <div>
<div className="container">
  <div className="card">
    <div className="card-image">
      <h2 className="card-heading">
        Get started
        <small>Let us create your account</small>
      </h2>
    </div>
    <form className="card-form">
      
      <div className="input">
        <input
          type="text"
          className="input-field"
          defaultValue="vlockn@gmail.com"
          required=""
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label className="input-label">Email</label>
      </div>
      <div className="input">
        <input type="password" className="input-field" required=""  value={password}
          onChange={(e)=>setPassword(e.target.value)}   />
        <label className="input-label">Password</label>
      </div>
      <div className="action">
        <button className="action-button"  type="button" onClick={()=>handelLogin({email,password})} >register</button>
      </div>
    </form>
    <div className="card-info">
      <p>
        By signing up you are agreeing to our{" "}
        <a href="#">Terms and Conditions</a>
      </p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
