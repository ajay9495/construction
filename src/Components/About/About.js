import React from 'react'
import './About.css'

import Row from '../BaseComponents/Row/Row'
import Col from '../BaseComponents/Col/Col'
import Image from '../../images/AboutImage1.webp'

export default function About() {



  return (
    <Row id='about' classList={'bo r-x-center'}>
        
        <Col classList="bo w-9 w-11-s ">
            <Row classList="bo a-box ">
                <Col classList="bo hide-s w-6 c-x-center">
                    <div className="img-wrapper">
                        <img className='a-img' src={Image} alt="" />
                    </div>
                </Col>
                <Col classList="bo p-5 g-5 w-6 w-12-s c-x-start">
                    <div className='bo txt-l'>
                        About Us
                    </div>
                    <div className='bo txt-m pr-5'>

                        Verizon is a construction company based in Pennsylvania that specializes in delivering high-quality construction services to its clients. With over a decade of experience in the industry, the company has established itself as a trusted and reliable provider of construction services in the region.
                        The company offers a wide range of services that cater to the diverse needs of its clients. These services include residential and commercial construction, renovation and remodeling, and custom home building. The company has a team of experienced and skilled professionals who work closely with clients to understand their needs and provide customized solutions that meet their specific requirements.

                    </div>
                </Col>
            </Row>
        </Col>

    </Row>
  )
}
