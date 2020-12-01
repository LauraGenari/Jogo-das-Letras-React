import React from 'react'
import { Link } from 'react-router-dom'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export default function Tema({mobile}) { 
    console.log(mobile)
    var size;
    if (mobile) {
        size = {
            width: "30vw",
            height: "30vw",
            margin: "1.5vw"        }
        
    }
    else {
        size = {
            width: "10vw",
            height: "10vw",
            margin: "1vw"
        } 
    }
    
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="ESCOLHA UM TEMA"/>
            <TemplateLilas mobile={mobile} />
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                <Link to={{
                    pathname:'game',
                    tema: 'Chikungunya'
                }}>
                    <button className="dark" style={size}>
                        Chikungunya
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Dengue'
                }}>
                    <button className="dark" style={size}>
                        Dengue
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'FebreAmarela'
                }}>
                    <button className="dark" style={size}>
                        Febre Amarela
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Zika'
                }}>
                    <button className="dark" style={size}>
                        Zika
                    </button>
                </Link>
                <Link to={{
                pathname:'game',
                tema: 'Aedes'
                }}>
                <button className="dark" style={size}>
                    Aedes Aegypti
                </button>
            </Link>            
            </div>
        </div>
    )    
    }