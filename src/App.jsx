import React, { useState } from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Login from './components/Login';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Movie from './components/Movie';
import SelectSeat from './components/SelectSeat';
import Checkout from './components/Checkout';
import logo from './assets/2.png'

export default function App() {
  const apikey = '3b933c4dc256cf8e2f9e55526b2c1c4c'
  const [user, setUser] = useState('')

  const navigate = useNavigate()

  return (
    <div  style={{backgroundColor:'#E0E0E0'}}>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{cursor:'pointer', display:'flex', alignItems:'center', gap:"1rem"}} onClick={()=>{
          if(user)
          {
            navigate('/home')}
          }
          }><img src={logo} height={40}></img><span style={{fontFamily:'cursive', fontSize:'1.5rem'}}>Confirm Ticket</span></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         {user && <Button onClick={()=>{
          localStorage.clear()
          setUser('')
          navigate('/')
         }} style={{backgroundColor:'#f72a25', border:'none'}}>Logout</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route index element={<Login setUser={setUser}/>}></Route>
        <Route path='/signup' element={<Signup setUser={setUser}/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/movie/:id' element={<Movie/>}></Route>
        <Route path='/select' element={<SelectSeat/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
    </div>
    
    </div>
  )
}
