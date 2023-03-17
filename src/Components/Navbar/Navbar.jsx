import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'

import logo from '../../assests/logo22.png'
import search from '../../assests/search.svg'
import Avatar from '../../Components/Avatar/Avatar'
import Button from '../../Components/Button/Button'

const Navbar=()=>{

    var user=null
    return(
        <nav>
            <div className="navbar-top">
                <Link to='/'className="nav-item nav-logo "  >
                    <img className="nav-img" src={logo} alt='logo'/>
                </Link>
                <Link to='/' className="nav-item nav-btn" >About</Link>
                <Link to='/' className="nav-item nav-btn" >Products</Link>
                <Link to='/' className="nav-item nav-btn" >For Teams</Link>
                <form>
                    <input type='text' placeholder='Search...'/>
                    <img className="search-icon" src={search} alt='Search' width='18'/>
                </form>

                {user === null? 
                <Link to='/Auth' className="nav-item nav-links">Log in</Link> :
                <>
                <Link to='/'><Avatar>M</Avatar></Link> 
                <Button>Log out</Button>
            
                </>
                }

                
            </div>
        </nav>
    )
}

export default Navbar