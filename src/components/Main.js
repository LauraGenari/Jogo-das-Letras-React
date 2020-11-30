import React, {Component} from 'react'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Nivel from './Nivel'
import Game from './game/Game'
import Tema from './Tema'

 
class Main extends Component{
    render() {
        return (
            <Switch>
                <Route path="/tema" component={Tema} />
                <Route path="/nivel" component={Nivel} />
                <Route path="/game" component={Game} />
                <Redirect to="/tema"/>
            </Switch>         
        )
    }
}

export default withRouter(Main);