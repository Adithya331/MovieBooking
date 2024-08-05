import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function SelectSeat() {

    const location = useLocation();
    const navigate = useNavigate();
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [cost, setCost] = useState(0)
  
    const createSeats = () => {
      let newSeats = [];
      let rows = 5;
      let cols = 8;
  
      for (let i = 0; i < rows; i++) {
        let rowArr = [];
        let rowChar = String.fromCharCode(65 + i);
        for (let j = 1; j <= cols; j++) {
          rowArr.push(rowChar + j);
        }
        newSeats.push(rowArr);
      }
      setSeats(newSeats);
    };
  
    useEffect(() => {
      createSeats();
    }, []);

    const handleSeats = (seat) => {
        if(!selectedSeats.includes(seat)){
            setSelectedSeats([...selectedSeats, seat])
        }
        else{
            let temp = selectedSeats.filter((prod)=>{
                return prod!=seat
            })
            setSelectedSeats(temp)
        }  
      };
      
  return (
    <div style={{padding:'2rem', overflow:'hidden'}}>
        <div style={{display:'flex', gap:'17rem'}}>
            <h4>{location.state.title}</h4>
            <p>Screen this way</p>
        </div>
      <div>
        {seats.map((row, rowIndex) => {
            return (
                <div style={{display: 'flex', gap: '4rem',marginTop: '2rem',justifyContent: 'center'}} key={rowIndex}>
                    {row.map((seat, seatIndex) => {
                        let isSelected = selectedSeats.indexOf(seat) > -1 ;
                        return (
                        <Button style={{ width: '5rem', backgroundColor: isSelected ? 'blue' : 'gray' }} key={seatIndex} 
                            onClick={() => {
                                handleSeats(seat);
                            }}
                        >
                            {seat}
                        </Button>
                        );
                    })}
                </div>
            );
        })}
      </div>

      <div style={{marginTop:'2rem', display:'flex', flexWrap:'wrap', alignItems:'center'}}>
        <h4 style={{display:'inline'}}>Seats Selected: </h4>
        {selectedSeats.map((seat, index) => (
            <span style={{color:'white', fontSize:'20px', backgroundColor:'blue', margin:'5px', padding:'5px', borderRadius:'5px'}} key={index}>{seat}</span>    
        ))}
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', marginRight:'5rem'}}>
        <h4>Total cost is: <b>{selectedSeats.length * 200}</b></h4>
        </div>

        <div style={{display:'flex', justifyContent:'flex-end', marginRight:'5rem'}}>
        <Button style={{width:'13rem', backgroundColor:'red', border:'none'}} onClick={()=>{navigate('/checkout')}}>CheckOut</Button>
        </div>
    </div>
  )
}

export default SelectSeat;
