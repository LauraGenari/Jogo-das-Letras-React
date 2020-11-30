import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Main from './components/Main'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main/>
        </BrowserRouter>
    );
  }
}
