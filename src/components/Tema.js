import React from 'react'
import { Link } from 'react-router-dom'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export default function Tema({mobile}) { 
    var size, content;
    if (mobile) {
        size = {
            width: "50vw",
            height: "10vh",
            margin: "1vw"
        }
        content =             <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                <Link to={{
                    pathname:'game',
                    tema: 'FebreAmarela'
                }}>
                    <button className="tema roxo" style={size}>
                        Febre Amarela
                    </button>
                </Link>
                 <Link to={{
                    pathname:'game',
                    tema: 'Chikungunya'
                }}>
                    <button className="tema azul" style={size}>
                        Chikungunya
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Aedes'
                    }}>
                    <button className="tema dark" style={size}>
                        Aedes Aegypti
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Zika'
                }}>
                    <button className="tema azul" style={size}>
                        Zica
                    </button>
                </Link>                           
                <Link to={{
                    pathname:'game',
                    tema: 'Dengue'
                }}>
                    <button className="tema roxo" style={size}>
                        Dengue
                    </button>
                </Link>
            </div>
    }
    else {
        size = {
            width: "15vw",
            height: "5vw",
            margin: "0.5vw 3vw 0.5vw 3vw"
        } 
        content =             <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                <Link to={{
                    pathname:'game',
                    tema: 'FebreAmarela'
                }}>
                    <button className="tema roxo" style={size}>
                        Febre Amarela
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Zika'
                }}>
                    <button className="tema azul" style={size}>
                        Zica
                    </button>
                </Link> 
                 <Link to={{
                    pathname:'game',
                    tema: 'Chikungunya'
                }}>
                    <button className="tema azul" style={size}>
                        Chikungunya
                    </button>
            </Link>
                                     
                <Link to={{
                    pathname:'game',
                    tema: 'Dengue'
                }}>
                    <button className="tema roxo" style={size}>
                        Dengue
                    </button>
                </Link>
                <Link to={{
                    pathname:'game',
                    tema: 'Aedes'
                    }}>
                    <button className="tema dark" style={size}>
                        Aedes Aegypti
                    </button>
                </Link> 
            </div>
    }

    
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="ESCOLHA UM TEMA" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile} />
            {content}
        </div>
    )    
    }