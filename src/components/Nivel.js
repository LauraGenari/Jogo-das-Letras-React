import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nivel extends Component{ 

    
    render() {
        return (
            <div>
                <Link to={{
                    pathname:'game',
                    tema: this.props.location.tema,
                    nivel: 'Facil'}}>
                    <button className="dark">Facil</button>

                </Link>
                <Link to={{
                    pathname:'game',
                    tema: this.props.location.tema,
                    nivel: 'Medio'}}>
                    <button className="dark">Médio</button>
                    
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: this.props.location.tema,
                    nivel: 'Dificil'}}>
                    <button className="dark">Difícil</button>
                    
                </Link>
            </div>
        )
    }

}