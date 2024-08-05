import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Geoapify = "https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:79.579014,17.9976725,5000&bias=proximity:79.579014,17.9976725&limit=20&apiKey=bf3daf131d484ed2a89f50bd0c13d090"
const Image_API = 'https://image.tmdb.org/t/p/w500/'


export default function Movie() {

    const navigate = useNavigate()
    const location = useLocation()
    const [theatres, setTheatres] = useState([])
    const Timings = ['10:30 AM', '3:00 PM', '6:00 PM', '9:00 PM']
    const {title, overview, poster_path} = location.state

    const [latLng, setLatLng] = useState({})

    useEffect(()=>{
        if('geolocation' in navigator){
          navigator.geolocation.getCurrentPosition((position)=>{
            const {longitude, latitude} = position.coords
           setLatLng({
            lat: latitude,
            lng: longitude
           })
          })
        }
    },[])

    useEffect(()=>{
      if(Object.keys(latLng).length > 0)
      {
        axios.get(`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:${latLng.lng},${latLng.lat}&limit=20&apiKey=bf3daf131d484ed2a89f50bd0c13d090`).then((resp)=>{
          const featuresArr = resp.data.features
          const names = []
          featuresArr.map((feature)=>{
            return names.push(feature.properties.name)
          })
          setTheatres(names)
          })
      }
    },[latLng])

    // console.log(latLng)
    console.log(theatres)
  return (
    <div style={{margin:'1rem'}}>
      <Row style={{gap:'2rem'}}>
        <Col style={{borderRight:'2px solid lightgray'}}>
            <div style={{padding:'2rem'}}>
                <img src={Image_API+poster_path} height={350} style={{borderRadius:'10px'}} ></img>
                <h3 style={{marginTop:'0.5em'}}>{title}</h3>
                <p>{overview}</p>
            </div>
        </Col>
        <Col>{theatres.map((theatre, index) => {
          return(
            <div key={index} style={{display:'flex', flexDirection:'column', marginBottom:'1rem', gap:'1rem', borderBottom:'2px solid lightgray', paddingBottom:'1rem'}}>
              <h2>{theatre}</h2>
              <div style={{display:'flex', gap:'1rem'}}>
                {
                  Timings.map((time)=>{
                  return <Button  onClick={()=> navigate('/select', {state:{title:title}})} key={time}>{time}</Button>
                })}
              </div>
            </div>
          )
        })
      }</Col>
      </Row>
    </div>
  )
}
