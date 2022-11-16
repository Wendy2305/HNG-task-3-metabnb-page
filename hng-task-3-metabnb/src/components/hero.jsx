import React from 'react'
import HeroPics from '../../src/images/hero_images.png'

const Hero = () => {
  return (
    <div className="Heropage">
                <div className="all-hero-text">
                    <h1 id="hero-header">Rent a <span className='Hero-text'> Place</span>  away from <br/>
                    <span className='Hero-text'>Home</span> in the <span className='Hero-text'>Metaverse</span></h1>
                    <p className="Hero-story">
                        we provide you access to luxury and affordable houses<br/> 
                        in the metaverse, get a chance to turn your<br/>
                        imagination to reality at your comfort zone.<br/>
                    </p>

                    <input 
                        className="hero-input"
                        type="text"
                        placeholder="Search for location"
                        />

                    <button id="hero-btn">
                        Search
                    </button>
                </div>

                
                <img id ="Hero-imgs" src={HeroPics} alt="Little NFT Houses"/>
            </div>
  )
}

export default Hero