import React, {useState} from 'react'
import { Items } from './navbarItems'
import './navbar.css'
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';


const Navbar = () => {
  const [status, setStatus]=useState(false);
  return (
    <>
      <div>
        <nav className="Navbar">
          <a href='/' className='profile-img'>
            <img src='https://media-exp1.licdn.com/dms/image/C5603AQEaqBuGKFhlPw/profile-displayphoto-shrink_100_100/0/1637503942230?e=1658966400&v=beta&t=WXcCJLMU214BmtMxvWPd-zlTT5wioHQw1CWOGPHgxzk' alt="Cody Liew Chern Jin's Profile Picture" className="navbar-pic" />
          </a>
          <div onClick={() => setStatus(!status)} className='menu-logo'>
            <i style={{position:'relative'}}>{ status ? <AiFillCaretDown/> : <AiOutlineMenu/>}</i>
          </div>
          <ul className={status? 'nav-menu-on':'nav-menu-off'}>
            {Items.map((item,index)=>{
              return(
                <li key = {index}>
                  <a className = {item.cName} href={item.url}>
                    {item.title}
                  </a>
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