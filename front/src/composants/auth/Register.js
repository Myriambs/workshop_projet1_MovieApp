import React, { useState } from 'react'
import './register.css'
import { registerAccount } from '../../api/authApi'
import {useNavigate} from "react-router-dom"



const Register = () => {
const Navigate = useNavigate()

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const handelRegister=async(value)=>{
  await registerAccount(value)
  Navigate('/login')
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
          defaultValue="Alexander Parkinson"
          required=""
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <label className="input-label">Full name</label>
      </div>
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
        <button className="action-button"  type="button" onClick={()=>handelRegister({name,email,password})} >register</button>
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

export default Register
