import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, hashHistory } from 'react-router-dom';
import Header from '../common/Header.jsx';
import Explore from '../Explore/Explore.jsx';
import Home from '../Home/Home.jsx';
import '../../public/reset.less'
import '../../public/common.less'

class Layout extends Component {
  render () {
    return (
        <BrowserRouter history={hashHistory}>
            <div>
              <Header />
              <div className="app-content">
                <Route exact path="/" component={Home} />
                <Route exact path="/explore" component={Explore} />
              </div>
            </div>
        </BrowserRouter>
    )
  }
}

export default Layout;