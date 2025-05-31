import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Home() {
  return (
    <div className='home'>
        <img src="./../assests/7509344.jpg" alt="" />
        <div className="home-content">
            <div className="home-heading">
                <h1>India’s Most Trusted Men’s <span>Wellness</span> Platform</h1>
            </div>
            <div className="home-para">
                <p>Real solutions for Indian men’s mental, physical & intimate health—no stigma, no BS.</p>
            </div>
            <div className="home-btn">
                <button>Get Started </button>
                <button>Book a Free Consultation</button>
            </div>
        </div>
        <div className="home-img">
            
        </div>
    </div>
  )
}

export default Home