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
            <img src='https://i.seadn.io/gcs/files/9d9525ebb0617fd89f57aa5aeb4240b9.png?auto=format&w=512' alt="Cody Liew Chern Jin's Profile Picture" className="navbar-pic" />
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