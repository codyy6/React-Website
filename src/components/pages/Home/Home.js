import React from 'react'
import './Home.css'
const home = () => {
    document.title='Home'
  return (
    <div className='whole'>
      <div className='profile'>

        <div className='section'>
          <img src="https://drive.google.com/uc?export=view&id=12fui3d3uac6vkeGH6NydARk0jm-2vfUo" alt="Cody Liew Chern Jin"/>
        </div>

        <div className='text'>
          <h1><u>Liew Chern Jin</u></h1>
          <p>Previously, I was the vice president of Quarter Master (QM) in Catholic High School, Petaling Jaya. Have various experience in leading group out for duties such as different sport events and organising all of the sports events held by the school. Currently a Diploma in Data Informatics student and am taking my internship at Sales Connections located at Subang Square, Subang Jaya. I am very passionate about coding and love to discover more opportunities within the coding space. Plan to further study in Intelligent System (AI) at APU for my degree and also self-learning more about blockchain technology and web3. Have a dream to create a better world through the usage of technology such as easing peoples’ life and solving issues that is widely recognise such as data privacy.</p>
          
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