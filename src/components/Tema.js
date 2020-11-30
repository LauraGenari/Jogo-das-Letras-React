import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Tema extends Component{ 

    render() {
        return (
        <div>            
            <Link to={{
                pathname:'nivel',
                tema: 'Chikungunya'
                }} >
                <button className="dark">
                    Chikungunya
                </button>
            </Link>
            <Link to={{
                pathname:'nivel',
                tema: 'Dengue'
                }} >
                <button className="dark">
                    Dengue
                </button>
            </Link>
            <Link to={{
                pathname:'nivel',
                tema: 'FebreAmarela'
                }} >
                <button className="dark">
                    Febre Amarela
                </button>
            </Link>
            <Link to={{
                pathname:'nivel',
                tema: 'Zika'
                }} >
                <button className="dark">
                    Zika
                </button>
            </Link>
            <Link to={{
                pathname:'nivel',
                tema: 'Aedes'
                }} >
                <button className="dark">
                    Aedes Aegypti
                </button>
            </Link>            
        </div>
        )    
    }

}