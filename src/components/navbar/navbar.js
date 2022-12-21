import React, {useState} from 'react'
import { Items } from './navbarItems'
import './navbar.css'
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [status, setStatus]=useState(false);
  return (
    <>
      <div>
        <nav className="Navbar">
          <Link to="/React-Website" className='profile-img'>
            <img src='https://media.licdn.com/dms/image/C5603AQEaqBuGKFhlPw/profile-displayphoto-shrink_400_400/0/1637503942230?e=1677110400&v=beta&t=Y3MeCC74wJla2d0q5jtwoFpWFsWGC-WhX5absqNLvKI' alt="Cody Liew Chern Jin's Profile Picture" className="navbar-pic" />
          </Link> 
          <div onClick={() => setStatus(!status)} className='menu-logo'>
            <i style={{position:'relative'}}>{ status ? <AiFillCaretDown/> : <AiOutlineMenu/>}</i>
          </div>
          <ul className={status? 'nav-menu-on':'nav-menu-off'}>
            {Items.map((item,index)=>{
              return(
                <li key = {index}>
                  <Link onClick={() => setStatus(false)} className="nav-links" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar