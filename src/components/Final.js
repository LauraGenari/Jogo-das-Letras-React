import React from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export function Pontuador(inicial, final) {
    return <div  style={{background: "rgba(255, 210, 134, 0.6)",borderRadius: "8px", padding:"1em", width:"fit-content"}}>
       { Math.round(10000 / (final - inicial)) * 5} {" pontos"}

    </div>
}
export function Tempo(inicial, final) {
    var segundos = Math.round((final - inicial) / 1000)
    var minutos = 0
    var horas = 0
    if (segundos >= 60){
        minutos = segundos / 60
        segundos %= 60
    }
    if (minutos >= 60) {
        horas = minutos / 60
        minutos %= 60
        segundos %= 60
    }
    return <div style={{background: "rgba(255, 210, 134, 0.6)",borderRadius: "8px", padding:"1em", width:"fit-content"}}>
      {horas}:{minutos}:{segundos}
  </div>
}
export default function Final({ mobile,location}) { 
    const final = Date.now()

    const content =
        <div style={{ display: mobile ? "block" : "flex" }}>
            <div style={{padding:"3em"}}>
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img alt="trofeu" src={window.location.origin + "/trofeus.png"} style={{height:"7vh"}}/>
                </span>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Sua pontuação total foi</p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    { Pontuador(location.init, final)} 
                </div>
            </div>
            <div style={{padding:"3em"}}>
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img alt="estrelas" src={window.location.origin + "/estrelas.png"} style={{height:"7vh"}}/>
                </span>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Você concluiu o jogo (fases 1 a 5) em </p>
                <div style={{display:"flex", justifyContent:"center"}}>
                    { Tempo(location.init, final)}
                </div>
            </div>
        </div>
    
    console.log((Date.now() - location.init))
    return (
        <div style={{background:"url('/g10.png')",backgroundSize:"cover" ,width:mobile?"100%":"unset", height:mobile?"100%":"unset"}}>
            <TemplateEscuro mobile={mobile} id="FINAL" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile}/>
            {content}
        </div>
    )    
}