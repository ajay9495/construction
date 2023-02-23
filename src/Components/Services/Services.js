import React from 'react'
import './Services.css'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import Office from '../../images/office.jpg'
import SchoolIcon from '../../images/school_icon.png'
import General from '../../images/general.jpg'
import ConstructionManagement from '../../images/ConstructionManagement.jpg'
import DesignManagement from '../../images/DesignManagement.jpg'
import PreConstruction from '../../images/PreConstruction.jpg'



export default function Services() {
  return (
    <Row classList={'bo  r-x-center'}>
        <Col classList="bo w-10 ">
            <Row classList="bo w-12 ">

                <Col classList="bo g-3 w-5 s-txt-box">
                    <div className='txt-l txt-dark'>Our Serivces</div>
                    <div className='w-9 txt-m txt-dark'>
                        These are the highlights of the services offerd by us
                    </div>
                </Col>
                <Col classList="bo w-7 g-5">
                    <Row classList="bo fx-nowrap g-5">
                        <Col id="box1" classList="bo  c-x-center w-6">
                            <Col classList={'s-img-wrapper'}>
                                <img className='s-image' src={General} alt="" />
                            </Col>
                            <Col classList={'px-3 p-4 g-3 s-sub-box w-11 c-x-center'}>
                                <div className='s-sub-img'>
                                    <img className='s-sub-icon' src={SchoolIcon} alt="" />
                                </div>
                                <div className='txt-m txt-bold-m'>Construction general</div>
                                <div className='txt-s'>General works includes works on civil engeneering Lorem ipsum dolor sit amet, consectetur adip isicing elit. Provident, unde!</div>
                            </Col>
                        </Col>
                        <Col id="box1" classList="bo  c-x-center w-6">
                            <Col>
                                <img className='s-image' src={ConstructionManagement} alt="" />
                            </Col>
                            <Col classList={'px-3 p-4 g-3 s-sub-box w-11 c-x-center'}>
                                <div className='s-sub-img'>
                                    <img className='s-sub-icon' src={SchoolIcon} alt="" />
                                </div>
                                <div className='txt-m txt-bold-m'>Construction Management</div>
                                <div className='txt-s'>We work with our clients from initial development through final construction. We can provide expertise to the team on items</div>
                            </Col>
                        </Col>
                    </Row>
                    <Row classList="bo fx-nowrap g-5">
                        <Col id="box1" classList="bo  c-x-center w-6">
                            <Col>
                                <img className='s-image' src={DesignManagement} alt="" />
                            </Col>
                            <Col classList={'px-3 p-4 g-3 s-sub-box w-11 c-x-center'}>
                                <div className='s-sub-img'>
                                    <img className='s-sub-icon' src={SchoolIcon} alt="" />
                                </div>
                                <div className='txt-m txt-bold-m'>Design Management</div>
                                <div className='txt-s'>After having in-house architects in the past, we have learned that selecting an architectural firm specific to your project</div>
                            </Col>
                        </Col>
                        <Col id="box1" classList="bo  c-x-center w-6">
                            <Col>
                                <img className='s-image' src={PreConstruction} alt="" />
                            </Col>
                            <Col classList={'px-3 p-4 g-3 s-sub-box w-11 c-x-center'}>
                                <div className='s-sub-img'>
                                    <img className='s-sub-icon' src={SchoolIcon} alt="" />
                                </div>
                                <div className='txt-m txt-bold-m'>Pre-Construction</div>
                                <div className='txt-s'>Understanding the development business and local jurisdictions are critical in getting a project off the ground</div>
                            </Col>
                        </Col>                        
                    </Row>
                </Col>

            </Row>


        </Col>
    </Row>
  )
}
