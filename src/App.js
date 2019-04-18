import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route}from 'react-router-dom'
import Home from './component/home/home'
import Part1 from './component/part1/part1'

const routes = [
  {path: "/", component: Home},
  {path: "/part1", component: Part1},
];

class App extends Component {
  render() {
    return (<BrowserRouter>
        <div>
          {
            routes.map((page, index) => page.component ?
              <Route key={index} exact path={page.path} component={page.component}/> : "")
          }
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
