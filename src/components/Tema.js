import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Tema extends Component{ 

    render() {
        return (    
            <div>
                <div style={{display:"flex"}}>
                    <Link to={{
                        pathname:'game',
                        tema: 'Chikungunya'
                        }} >
                        <button className="dark">
                            Chikungunya
                        </button>
                    </Link>
                    <Link to={{
                        pathname:'game',
                        tema: 'Dengue'
                        }} >
                        <button className="dark">
                            Dengue
                        </button>
                    </Link>
                </div>    
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Link to={{
                        pathname:'game',
                        tema: 'FebreAmarela'
                        }} >
                        <button className="dark">
                            Febre Amarela
                        </button>
                    </Link>
                </div>
                <div style={{display:"flex"}}>
                    <Link to={{
                        pathname:'game',
                        tema: 'Zika'
                        }} >
                        <button className="dark">
                            Zika
                        </button>
                    </Link>
                    <Link to={{
                    pathname:'game',
                    tema: 'Aedes'
                    }} >
                    <button className="dark">
                        Aedes Aegypti
                    </button>
                </Link>            
                </div>
            </div>
        )    
    }

}