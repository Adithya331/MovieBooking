import React, { useState } from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import image from '../assets/1.png'

export default function Signup({setUser}) {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')

    function handlechange(e){
      setEmail(e.target.value)
  }
  return (
    <div>
      <div className="login-container">
        <div className="left">
        <img src={image} height={500}></img>
        </div>
        <div className="right">
          <div className="box">
          {/* <h2>Login</h2> */}
            <form>
            <h2 style={{color:'red', fontFamily:'monospace'}}>Signup</h2>
              <input type='email' placeholder='Email' value={email} onChange={(e)=>{handlechange(e)}}></input>
              <input type='password' placeholder='Password' required></input>
              <input type='password' placeholder='Confirm Password'></input>
              <Button onClick={()=>{
                if(email.length > 0)
                {
                  localStorage.setItem('userEmail', email)
                  setUser(email)
                  navigate('/home')
                }
                
              }}>Sign in</Button>
            </form>
            <p>Already a member ? <a onClick={()=>{navigate('/')}} style={{color:'blue', fontSize:'large'}}> Login</a></p>
          </div>
          
        </div>
      </div>
    </div>
  )
}
