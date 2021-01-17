import React from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export default function Creditos({mobile}) { 
    const content =
    <div style={{ textAlign: "center", display:mobile?"block":"flex" }}>        
        <div style={{margin:mobile ? "0":"5em 2.5em 0em 5em"}}>
            <div style={{ fontFamily: "Luckiest Guy" }}>COORDENAÇÃO E SUPERVISAO GERAL</div>
            <div>Leila Maria Beltramini</div>
            <div>Nelma R. S. Bossolan</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>EDUCADORA</div>
            <div>Gislaine Gomes da Costa</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>CONSULTORIA E ORIENTAÇÃO DE TI</div>
            <div>Claudinei Caetano de Souza (versão 1.0)</div>
            <div>Simone Ferreira Souza (versão 2.0)</div>
            <br></br>
        </div>
        <div style={{margin:mobile ? "0":"5em 5em 0em 2.5em"}}>
            <div style={{fontFamily:"Luckiest Guy"}}>DESENVOLVIMENTO DE SOFTWARE</div>
            <div>Diego Prosperi Turibio (versão 1.0)</div>
            <div>Luísa Anastácio (versão 1.0)</div>
            <div>Laura Genari (versão 2.0)</div>
            <br></br>
            <div style={{fontFamily:"Luckiest Guy"}}>CONTEÚDO E ARTE</div>
            <div>Marília Faustino da Silva</div>
        </div>
    </div>
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="CRÉDITOS" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            {content}
        </div>
    )    
    }