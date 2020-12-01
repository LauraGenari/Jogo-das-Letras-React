import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Template from './components/Template';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Template />

        </BrowserRouter>
    );
  }
}
