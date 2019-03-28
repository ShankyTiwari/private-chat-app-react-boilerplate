import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'

import Login from './login/Login';
import Registration from './registration/Registration';

import './Authentication.css';

class Authentication extends Component {
  state = {
    loadingState: false
  }

  render() {
    return (
      <div className="container">
        <div className = {`overlay auth-loading ${this.state.loadingState ? '' : 'visibility-hidden'}`}>
          <h1>Loading</h1>
        </div>
        <div className="authentication-screen">
          <Tabs variant="pills" defaultActiveKey = "login" >
            <Tab eventKey="login" title="Login">
              <Login/>
            </Tab>
            <Tab eventKey="registration" title="Registration">
              <Registration/>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Authentication;
