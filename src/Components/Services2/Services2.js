import React from 'react'
import './Services2.css'
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import GeneralConstruction from '../../images/GeneralConstruction.png'
import ConstructionPlanning from '../../images/ConstructionPlanning.png'
import ServiceAndMaintenance from '../../images/ServiceAndMaintenance.png'

import Test from '../../images/logo.png'

export default function Services2() {
  return (
    
    <Row id='service' classList="bo r-x-start s-wrapper">
        <Col classList="bo w-6 w-12-s c-x-center">
            <Col classList={'bo w-10 w-12'}>
                <Row  classList={'bo py-5 r-x-center'}>
                    <div className="txt-l txt-dark">
                        Services
                    </div>
                </Row>
                <Col classList="bo py-3 px-5 g-3">
                    <Row classList="bo p-3 fx-nowrap">
                        <Col classList="bo px-5">
                            <img className={'s-logo'} src={GeneralConstruction} alt="test" />
                        </Col>
                        <Col classList="bo g-3 pr-5">
                            <div className="txt-m txt-bold-m txt-dark">
                                General Construction
                            </div>
                            <div className="txt-s  txt-dark">
                                Includes all the general civil construction works.
                                All Works are completed as per the customer requirement
                            </div>
                        </Col>
                    </Row>
                    <Row classList="bo p-3 fx-nowrap">
                        <Col classList="bo px-5">
                            <img src={ConstructionPlanning} className='s-logo' alt="" />
                        </Col>
                        <Col classList="bo g-3 pr-5">
                            <div className="txt-m txt-bold-m txt-dark">
                            Construction Planning
                            </div>
                            <div className="txt-s  txt-dark">
                                We do the planning and estimation of the cost related to the construction
                            </div>
                        </Col>
                    </Row>
                    <Row classList="bo p-3 fx-nowrap">
                        <Col classList="bo px-5">
                            <img src={ServiceAndMaintenance} className='s-logo' alt="" />
                        </Col>
                        <Col classList="bo g-3 pr-5">
                            <div className="txt-m txt-bold-m txt-dark">
                                Service And Maintenance
                            </div>
                            <div className="txt-s  txt-dark">
                                We also take care of general service and maintenance of  your propery
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Col>
        </Col>
    </Row>

  )
}
