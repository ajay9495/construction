import React from 'react'

import './PreviousWorks.css';
import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'

import OfficeImage from '../../images/office.jpg'
import AboutImage from '../../images/AboutImage.png'

import PrevSq1 from '../../images/PrevSq11.webp'
import PrevSq2 from '../../images/PrevSq21.webp'
import PrevSq3 from '../../images/PrevSq31.webp'
import PrevSq4 from '../../images/PrevSq41.webp'
import Prevh from '../../images/Prevh1.webp'
import Prevv from '../../images/Prevv1.webp'


export default function PreviousWorks() {
  return (
        <Row  id='portfolio' classList="bo r-x-center">
            <Col classList="bo w-9 w-11-s c-x-center">
                <div className="py-5 txt-l txt-dark">Previous Works</div>
                <Row classList="bo w-12 gx-3 gy-3-s fx-nowrap fx-wrap-s">
                    <Col classList="bo gy-3  fx-nowrap w-6 w-12-s pw-box">
                        <Row classList={'bo  gx-3 fx-nowrap'}>
                            <Col  classList="bo  w-6 ">
                                <div id='pw-img-wrapper1' className="pw-square">
                                    <div className="h-100 p-3 pw-img-overlay">
                                        <div className="txt-m">
                                            Illinious Public school
                                        </div>
                                        <div className="txt-s">
                                            Okemos, Michigan
                                        </div>
                                    </div>
                                </div>                            
                            </Col>
                            <Col classList="bo w-6">
                                <div id='pw-img-wrapper2' className="pw-square">
                                    <div className="h-100 p-3 pw-img-overlay">
                                        <div className="txt-m">
                                            Crumbl Cookie
                                        </div>
                                        <div className="txt-s">
                                            Carmel, Indiana
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row classList={'bo '}>
                            <div id='pw-img-wrapper3' className="pw-horizontal">
                                <div className="h-100 p-3 pw-img-overlay">
                                    <div className="txt-m">
                                        Crumbl Cookie
                                    </div>
                                    <div className="txt-s">
                                        Los Alamos, New Mexico
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col classList="bo gy-3  fx-nowrap w-6 w-12-s pw-box">
                        <Row classList={'bo '}>
                            <div id='pw-img-wrapper6' className="pw-horizontal">
                                <div className="h-100 p-3 pw-img-overlay">
                                    <div className="txt-m">
                                        Crumbl Cookie
                                    </div>
                                    <div className="txt-s">
                                        Tonica Community Consolidated School District
                                    </div>
                                </div>
                            </div>
                        </Row>
                        <Row classList={'bo  gx-3 fx-nowrap'}>
                            <Col classList="bo  w-6">
                                <div id='pw-img-wrapper4' className="pw-square">
                                    <div className="h-100 p-3 pw-img-overlay">
                                        <div className="txt-m">
                                            Glen Hollow Shopping Center
                                        </div>
                                        <div className="txt-s">
                                            Penn Wynne, Pennsylvania
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col classList="bo w-6">
                                <div id='pw-img-wrapper5' className="pw-square">
                                    <div className="h-100 p-3 pw-img-overlay">
                                        <div className="txt-m">
                                            Running Central Outfitters
                                        </div>
                                        <div className="txt-s">
                                            Richmond Heights, Missouri
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            
            </Col>

        </Row>
  )
}
