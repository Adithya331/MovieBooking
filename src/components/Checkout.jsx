import React from 'react'
import {Row,Col} from 'react-bootstrap'
import left from '../assets/3.png'
import right from '../assets/qr.png'
export default function Checkout() {
  return (
    <div >
        <Row style={{padding:'4rem'}}>
            <Col>
                <div style={{display:'flex',flexDirection:'column',gap:'1rem', justifyContent:'center', alignItems:'center', borderRight:'2px solid gray'}}>
                    <div>
                        <img src={left} height={400}></img>
                    </div>
                    <div style={{marginRight:'10rem'}}>
                        <h5>Tickets Booked</h5>
                        <h6>Enjoy Your Movie</h6>
                    </div>
                </div>
            </Col>
            <Col>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img src={right} height={400}></img>
                </div>
            </Col>
        </Row>
      
    </div>
  )
}
