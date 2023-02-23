import React from 'react'
import Row from '../../BaseComponents/Row/Row';
import Col from '../../BaseComponents/Col/Col';
import loadingImage from '../../../images/loading.gif'

import './Content.css';

export default function Content({currentState,close,submit}) {
  return (
    
        <div className="m-form-box">
          <Col classList={'bo c-x-center g-3'}>
              <Row classList="bo px-5 w-12 r-x-end txt-bold-l m-txt" onClick={()=>{ close(); }}>
                Close
              </Row>
              <Row classList="bo m-txt txt-l txt-dark ">
                Contact Us
              </Row>
              <Row classList="bo hide px-5 w-8 txt-s txt-dark ">
                Contact our customer support to learn more
              </Row>
              <Row classList={'bo w-10 r-x-center'}> 
                <form className='w-8 py-3'  action="">
                  <Col classList={'bo g-3'}>
                      <input className='m-input' type="text" id="fname" placeholder="Phone Number" name="fname" />
                      <textarea  className='m-txtarea' placeholder='Message' />
                      <input className='m-submit-button' type="submit" value="Submit" onClick={(e)=>{ submit(e) }}  />
                  </Col>
                </form>
              </Row>

              {(currentState == "submitting")&&
        
                <Row classList={'bo r-x-center  r-y-center'}>
                  {/* <div className="txt-m txt-dark">
                    Submitting
                  </div> */}
                  <img className='m-c-loading' src={loadingImage} alt="" />
                </Row>
              }

          </Col>
        </div>

  )
}
