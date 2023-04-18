import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const {total_item} = useContext(CartContext)
  const { loginWithRedirect, logout ,isAuthenticated  } = useAuth0();
 
  return (
    <>
       <nav className="navbar navbar-expand-lg" style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img
              src="assets/images/logo-polkadot.svg"
              className="img-fluid "
              style={{width:'50%'}}
              alt="logo"
            /> */}
          <h2>HAMZA</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              
              {isAuthenticated ?  <li className="nav-item">
                <button className='btn nav-link '  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
              </li> : <li className="nav-item">
                <button className='btn nav-link ' onClick={() => loginWithRedirect()}>Log In</button>
              </li> }
              
             
              <li className="nav-item">
                <Link  className="nav-link" to="/cart">
                <Badge color="secondary" badgeContent={total_item} >
        <ShoppingCartIcon />
      </Badge>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header