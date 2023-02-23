import React from 'react'
import './Thankyou.css'
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';



export default function Thankyou({close}) {
  return (

        <div className="m-form-box">
          <Col classList={'bo c-x-center g-3'}>
              <Row classList="bo m-txt txt-l txt-dark ">
                Thank You
              </Row>
              <Row classList="bo  px-5 w-8 txt-s txt-dark ">
                Thanks for contcting us. Our customer support team 
                will reach out to you shortly
              </Row>
              <Row classList={'bo w-10 r-x-center'}> 
                <div className='ty-submit-button' onClick={()=>{ close() }}>Okay</div>
              </Row>
          </Col>
        </div>


  )
}
