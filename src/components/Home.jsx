import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

const Movie_API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3b933c4dc256cf8e2f9e55526b2c1c4c&language=en-US&page=1'
const Image_API = 'https://image.tmdb.org/t/p/w500/'
export default function Home() {

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        axios.get(Movie_API).then((resp)=>{
            
            setMovies(resp.data.results)
        })
    },[])
    console.log(movies)

    const navigate = useNavigate()
  return (
    <div style={{display:'flex', flexWrap:'wrap',gap:'1rem', marginTop:'1rem'}}>
        {
            movies.map((movie)=>{
                return(
                    <div key={movie.id} >
                        <Card style={{padding:'1rem',  width:'20rem', overflow:'hidden', height:250, display:'flex',
                            flexDirection:'column', gap:'10px' }}
                            onClick={()=>navigate(`/movie/${movie.id}` ,{state:movie})}>
                            <Card.Img  src={Image_API+movie.backdrop_path} />
                            <Card.Title>{movie.title}</Card.Title>
                        </Card>
                    </div>
                )
            })
            
        }
    </div>
  )
}
