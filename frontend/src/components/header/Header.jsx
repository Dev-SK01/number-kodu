import React from 'react'
import './header.css';
import bgImg from '../../assets/header-background.png'

const Header = () => {
  return (
   <>
    <img src={bgImg} 
    alt="background-image" 
    className='col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12 img-fluid' />
   <header className='header col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12'>
            <div className="app-name">
                <h1>Number Kodu</h1>
            </div>
   </header>
   </>
  )
}

export default Header