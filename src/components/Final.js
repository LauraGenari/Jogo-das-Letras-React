import React from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';
import Pontuador from './game/Cornometro'

export default function Final({ mobile }) { 

    console.log("oi")
    const content =<div></div>
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="FINAL" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile}/>
            {content}
        </div>
    )    
    }