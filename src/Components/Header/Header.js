import React from 'react'
import './Header.css'

import Row from '../BaseComponents/Row/Row'
import Logo from '../../images/logo.png';


export default function Header() {
  return (
    
    <Row classList={'bo h-wrapper r-y-center r-x-start'}>
        <img className='h-logo' src={Logo} alt="" />
        <div className="nav">
            <Row classList={'bo txt-bold-m'}>
                <div className='nav-item'>
                    Home
                </div>
                <div className='nav-item'>
                    <a href='#about'>About</a>
                </div>
                <div className='nav-item'>
                    <a href='#service'>Services</a>
                </div>
                <div className='nav-item'>
                    <a href='#portfolio'>Portfolio</a>
                </div>
            </Row>
        </div>
    </Row>

  )
}
