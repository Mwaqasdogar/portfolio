import React from 'react'
import "./Hero.css"
import  Profile_img  from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Profile_img} alt="" />
      <h1> <span>I' am waqas</span>, frontend developer based in GamicaCloud</h1>
      <p>i am frontend developer from fsd in 6 month</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
