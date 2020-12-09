import React, { Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Tema from './Tema'
import Game from './game/Game'

export default class Routes extends Component {
    render() {
        const mobile = this.props.mobile
       

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/tema" render={(props) => <Tema {...props} mobile={mobile}/>}  />
                    <Route path="/game" render={(props) => <Game {...props} mobile={mobile} first={true}/>}  />
                    <Redirect to="/tema"/>
                </Switch>                           
            </BrowserRouter> 
        )
    }
 }