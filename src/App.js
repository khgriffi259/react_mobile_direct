import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Details from './Details'
import Cart from './components/Cart'
import NotFound from './NotFound'
import ProductList from './ProductList'
import Store from './Store'
import './App.css'

import 'materialize-css/dist/css/materialize.css'
import M from 'materialize-css'


class App extends Component {
  
  componentDidMount() {
    M.AutoInit()

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

  }
  
  render() {

    return  <>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={NotFound} />
              </Switch>
          </>
  }

}

export default App
