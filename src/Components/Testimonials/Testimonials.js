import React from 'react'

import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import './Testimonials.css'
import Quotes from '../../images/quotes.png'



export default function Testimonials() {
  return (
    <Row classList="bo r-x-center">
        <Col classList="bo w-9 w-11">
            <Row classList="bo g-3 g-5-s fx-nowrap fx-wrap-s">
                <Col classList="bo px-5 g-3 w-4 w-12">
                    <div className="txt-l txt-dark">
                        Testimonials
                    </div>
                    <div className=" hide-s txt-m txt-dark px-3">
                        Here is what our customers has to say about us
                    </div>
                </Col>
                <Col classList="bo w-4 w-12">
                    <div className="t-box">
                        <Row classList="bo ">
                            <Col classList="bo c-expand t-quotes c-x-center">
                                <div className='bo '>
                                    <img className='t-quotes' src={Quotes} alt="" />
                                </div>
                            </Col>
                            <Col classList="bo w-9 g-3">
                                <div className="txt-s txt-dark">
                                    Its been a wonderful experiance working with verizon.
                                    Surely will recommend their services.
                                </div>
                                <div className="txt-s txt-bold-m txt-dark pull-right">
                                    -Eric Rosens
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col classList="bo w-4 w-12">
                    <div className="t-box">
                        <Row classList="bo ">
                            <Col classList="bo c-expand t-quotes c-x-center">
                                <div className='bo '>
                                    <img className='t-quotes' src={Quotes} alt="" />
                                </div>
                            </Col>
                            <Col classList="bo w-9 g-3">
                                <div className="txt-s txt-dark">
                                    100% dedication to work. That is what i admire about the team verizon.
                                </div>
                                <div className="txt-s txt-bold-m txt-dark pull-right">
                                    -Mark Roberts
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>                                
            </Row>
        </Col>
    </Row>
  )
}
