import React from 'react'
import './Home.css'
const home = () => {
    document.title='React Website Done By Cody Liew'
  return (
    <div className='whole'>
      <div className='profile'>

        <div className='section'>
          <img src="https://drive.google.com/uc?export=view&id=12fui3d3uac6vkeGH6NydARk0jm-2vfUo" alt="Cody Liew Chern Jin"/>
        </div>

        <div className='text'>
          <h1><u>Liew Chern Jin</u></h1>
          <p>My passion for Coding and my undaunted spirit sprouts my dream to create a better world through technology. Currently a student pursuing Diploma in Data Informatics, I intend to move on and pursue a Degree in the field of Intelligent System, also known as AI in the society. In tandem with my undergraduate studies, my interest in blockchain technology and web3 has sparked my curiosity and motivated me to self-learn.</p> 
          <br></br>
          <p>Presently, I am also an intern of Sales Connections located at Subang Square where I continue learn and practice my soft-skills while simultaneously gaining valuable experiences. Previously, I was appointed as the Vice President of the Quarter Master in my high school, CHS PJ. Thus, I have picked up on various skills such as leadership and problem solving abilities. These expertise will definitely come into play in my current and future field of career.</p>
          
          <a href="https://github.com/codyy6" target={"_blank"} >
            <img src="https://drive.google.com/uc?export=view&id=1qNeJ_ZQ7sXTGjzQ7iFZAH5cI3s5_EfA-" alt="Github"/>
          </a>
          
          <a href="https://www.linkedin.com/in/cody-liew-3388b81aa/" target={"_blank"} >
            <img src="https://drive.google.com/uc?export=view&id=1Ln_MJj1a6BEV_JeWMxMUpUwj7VRH5oco" alt="LinkedIn"/>
          </a>
          
          <a href="https://wa.me/60196008826" target={"_blank"} >
            <img src="https://drive.google.com/uc?export=view&id=1vVPBYH12zPLv8avuh_ablcx56Na9aahn" alt="WhatsApp"/>
          </a>
          
          <a href="https://www.instagram.com/codyy6/?hl=en" target={"_blank"} >
            <img src="https://drive.google.com/uc?export=view&id=1zKF9Yt-Cew97kjzewvwuHYseSC1NTgff" alt="Instagram"/>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default home