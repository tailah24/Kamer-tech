import React, {useState} from 'react'
import '../Css/Navbar.css'


function Navbar() {
    const [sideBar, setSideBar] = useState(false);



        return(
            <div >
            <div className='navSection'>
            <div className='logoName'>
                {/* <img src={Logo} alt='logo' className='logo-img'/> */}
                <h1 className='main-logo'>Kamer Tech</h1>
                </div>
                {/* className={this.state.clicked ?  'navbar-ul' : 'nav-active'} */}
                <ul className='navbar-list' style={{ transform: sideBar ? 'translateX(0px)' : ''}} >
                    <li><a href='#'>Courses</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li ><a href='#'>Login</a></li>
                    <li ><button type='button' className='contactUs-btn'>Contact us</button></li>
                    </ul>
                    {/* <div className='search-bar'>
                        <input type='search' placeholder='Search ...'></input>
                        <label className='searchIcon'><span className='search-icon'><BiSearchAlt2 /></span></label>
                    </div> */}
                    <i className='fas fa-bars burger' onClick={() => setSideBar(!sideBar)}></i>
                {/* <hr className='hr'/> */}
            </div>
            </div>
        )
        
    
}
export default Navbar