import React from 'react'

import './Modal.css'

import Row from '../BaseComponents/Row/Row';
import Col from '../BaseComponents/Col/Col';
import Content from './Content/Content';
import Thankyou from './Thankyou/Thankyou';

export default function Modal({currentState, submit, open, close}) {


  return (
    <div className='m-wrapper' >

      {
        (currentState != "submitted")? 
          <Content currentState={currentState} close={close} submit={submit} />
        :
          <Thankyou close={close} />
      }

      
    </div>
  )
}
