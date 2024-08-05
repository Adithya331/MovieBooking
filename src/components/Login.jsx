import React, { useState } from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import image from '../assets/1.png'
import { useNavigate } from 'react-router-dom'

export default function Login({setUser}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  function handleChange (e){
      setEmail(e.target.value)
  }

  return (
    <div style={{  overflow:'hidden'}}>
      <div className="login-container">
        <div className="left">
          <img src={image} height={500}></img>
        </div>
        <div className="right">
          <div className="box">
            
            <form>
            <h2 style={{color:'red', fontFamily:'monospace'}}>Login</h2>
              <input type='email' placeholder='Email' value={email} required onChange={(e)=>{handleChange(e)}}  ></input>
              <input type='password' placeholder='Password' required></input>
              <Button onClick={()=>{
                if(email.length > 0)
                  {
                    localStorage.setItem('userEmail', email)
                    setUser(email)
                    navigate('/home')
                  }
              }} >Login</Button>
            </form>
            
            <p>Not a member ? <a onClick={()=>{navigate('/signup')}} style={{color:'blue', fontSize:'large'}}> SignIn</a></p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
