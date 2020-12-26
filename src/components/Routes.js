import React, { Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Tema from './Tema'
import Game from './game/Game'
import Inicial from './Inicial'

export default class Routes extends Component {
    render() {
        const mobile = this.props.mobile
       

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/tema" render={(props) => <Tema {...props} mobile={mobile}/>}  />
                    <Route path="/game" render={(props) => <Game {...props} mobile={mobile} />} />
                    <Route path="/inicial" render={(props) => <Inicial {...props} mobile={mobile}/>}  />
                    <Redirect to="/inicial"/>
                </Switch>                           
            </BrowserRouter> 
        )
    }
 }