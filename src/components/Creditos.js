import React from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export default function Creditos({mobile}) { 
    const content =<div></div>
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="INSTRUÇÕES" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile} />
            {content}
        </div>
    )    
    }