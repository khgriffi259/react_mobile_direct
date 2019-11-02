import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.css'

import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return <header>
       <nav>
          <div className="nav-wrapper black">
            <div className="container">
              <Link to="/" className="brand-logo"> <i className="large material-icons">phone_iphone</i> Mobile Direct</Link>
              <Link to="#" className="sidenav-trigger" data-target="mobile-menu" ><i className="material-icons">menu</i></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/cart" className="btn waves-effect blue"><i className="material-icons left">shopping_cart</i>Cart</Link></li>
              </ul>
            </div>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-menu">
          <h3 className="ml-2">menu</h3>
          <li><Link to="/"><i class="fas fa-mobile-alt"></i>Products</Link></li>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
        </ul>
     </header>

    
  }
}

export default Navbar
