/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ChatList from './chat-list/ChatList';
import Conversation from './conversation/Conversation';

import './Home.css';

class Home extends Component {
  state = {
    isOverlayVisible: false,
  }

  getChatListComponent() {
    return <ChatList/>
  }

  getChatBoxComponent = () => {
    return <Conversation/>
  }

  render() {
    return (
      <div className="App">
        <div className = {`${this.state.isOverlayVisible ? 'overlay': 'visibility-hidden' } `}>
          <h1>Loading</h1>
        </div>
        <header className="app-header">
          <nav className="navbar navbar-expand-md">
            <h4>Hello _______ </h4>
          </nav>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </header>

        <main role="main" className="container content" >
          <div className="row chat-content">
            <div className="col-3 chat-list-container">
              {this.getChatListComponent()}
            </div>
            <div className="col-8 message-container">
              {this.getChatBoxComponent()}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Home)
