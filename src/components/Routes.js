import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter, useLocation} from 'react-router-dom'
import Game from './game/Game'
import Tema from './Tema'

export default class Routes extends Component {
    render() {
        const mobile = this.props.mobile
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/tema"  render={(props) => <Tema {...props} mobile={mobile}/>}  />
                    <Route path="/game"  render={(props) => <Game {...props} mobile={mobile}/>}  />
                    <Redirect to="/tema"/>
                </Switch>                           
            </BrowserRouter> 
        )
    }
 }