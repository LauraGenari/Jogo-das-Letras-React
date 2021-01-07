import React, {useState} from 'react'
import TemplateEscuro from './TemplateEscuro';
import TemplateLilas from './TemplateLilas';

export default function Instrucoes({ mobile }) {
    const [cor, setCor] = useState("#fff")
    const [texto, setTexto] = useState(<div></div>)

    var fontsize = "1em"
    if (window.innerWidth < 500)
        fontsize = "0.001em"

    const niveis = <div>
        <span style={{display:"flex"}}>
            <strong style={{ padding: "1em" }} >NIVEIS</strong>
            <strong style={{ paddingTop: "1em"}}>-</strong>
            <div style={{padding:"1em"}}>há três níveis de dificuldade: básico, intermediário, avançado</div>

        </span>
        <span style={{display:"flex"}}>
            <strong style={{ paddingLeft: "1em", paddingRight: "1em"}} >FASES</strong>
            <strong>-</strong>
            <div style={{ paddingLeft: "1em", paddingRight: "1em" }} >a cada fase, uma nova palavra é adicionada, tal que, na fase 5, o jogador deverá descobrir 5 palavras</div>
        </span>
    </div>

    const pontuacao = <div>
        <span style={{ display: "flex" }}>
            <strong  style={{ padding: "1em" }} >PONTUAÇÃO</strong>
            <strong style={{ paddingTop: "1em" }}>-</strong>
            <div style={{ padding: "1em" }}>é o somatório das pontuações obtidas em cada fase</div>
        </span>
        <div style={{textAlign:"center", paddingLeft: "2em", paddingRight: "2em" }}>Quanto mais rápido for dada a resposta certa, maior será a pontuação!</div>
    </div>

    const comandos = <div>
        <span style={{display:"flex"}}>
            <strong style={{ padding: "1em" }} >ENTER</strong>
            <strong style={{ paddingTop: "1em"}}>-</strong>
            <div style={{padding:"1em"}}>verifica a resposta</div>

        </span>
        <span style={{display:"flex"}}>
            <strong style={{ paddingLeft: "1em", paddingRight: "1em"}} >SPACE</strong>
            <strong>-</strong>
            <div style={{ paddingLeft: "1em", paddingRight: "1em" }} >embaralha a palavra novamente</div>
        </span>
        <span style={{display:"flex"}}>
            <strong style={{ padding: "1em"}} >BACKSPACE</strong>
            <strong style={{ paddingTop: "1em"}}>-</strong>
            <div style={{ padding: "1em" }} >remove o último caractere inserido</div>
        </span>
    </div>
    
    const content =
        <div style={{fontSize: fontsize}}>
            <div style={{ padding: "1em",  width: mobile ? "75vw" : "50vw"}}>
                <p>O Jogo das Letras é composto por cinco fases, cujo objetivo é: a partir de uma dica, desvendar qual palavra se encontra embaralhada. </p>
                <p>Uma vez escolhido o nível de dificuldade, o usuário inicia o jogo na fase 1 podendo chegar a fase 5. A fase define o número de palavras a serem desembaralhadas.</p>
            </div>
            
            <div style={!mobile ? { display : "flex", alignItems:"center", position:"relative", bottom:"2vh", justifyContent:"space-around" } : {}}>
                <div style={{ display: "flex", justifyContent: "space-around"}}>
                    <span style={{margin: "0.5em"}}>
                        <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <a className="botao-redondo verde" onClick={() => { setCor("rgba(26, 188, 156, 0.2)"); setTexto(niveis)}}>
                                <img src={window.location.origin + "/img/trofeu.png"} alt="niveis" />
                            </a>                    
                        </span>
                        <small>Níveis e Fases</small>
                    </span>
                    <span style={{margin: "0.5em", display: mobile ? "none" : "block"}}>
                        <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <a className="botao-redondo rosa" onClick={() => { setCor("rgba(251, 132, 148, 0.2)"); setTexto(comandos)}}>
                                <img src={window.location.origin + "/img/teclado.png"} alt="niveis" />
                            </a>                    
                        </span>
                        <small>Comandos</small>
                    </span>
                    <span style={{margin: "0.5em"}}>
                        <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <a className="botao-redondo lilas" onClick={() => { setCor("rgba(123, 121, 241, 0.2)"); setTexto(pontuacao)}}>
                                <img src={window.location.origin + "/img/estrela.png"} alt="pontuação" />
                            </a>
                        </span>
                        <small>Pontuação</small>
                    </span>
                </div>
                <div style={{width: mobile ? "75vw" : "25vw", height: mobile ? "20vh" : "23vh", backgroundColor:cor,position:"relative",borderRadius:"16px", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"1vh", paddingRight:"1vh"}}>
                    {texto}
                </div>
            </div>
        </div>

    
    return (    
        <div>
            <TemplateEscuro mobile={mobile} id="INSTRUÇÕES" font={"Luckiest Guy"} size="2.3em" bolinhas={false }/>
            <TemplateLilas mobile={mobile} />
            {content}
        </div>
    )    
}