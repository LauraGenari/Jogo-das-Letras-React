import Letra from './Letra'
import Espaco from './Espaco'
import DropArea from './DropArea'
import React, {Component} from 'react'
import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import TemplateEscuro from '../TemplateEscuro';
import Swal from 'sweetalert2'
import { RandomWord } from './RandomWord'
import Fase from './TemplateFases'
import { Link } from 'react-router-dom';
import teclado from '../../../public/teclado.png';
import resetar from '../../../public/resetar.png';
import feliz from '../../../public/feliz.png';
import X from '../../../public/X.png';
import felizEstrela from '../../../public/feliz-estrela.png';
import enviar from '../../../public/enviar.png';

const ConditionalLink = ({ children, level,time }) => {
    if((level + 1 === 6))
        return <Link to={{pathname:'final', init:time}}>{children}</Link> 
    else
        return <div>{children}</div>
}

export default class Game extends Component{
     
    constructor(props) {
        super(props);
        const pw = RandomWord(1, this.props.location.tema)
        this.state = {
            fase: 1, 
            level: 1,
            palavra: pw,
            word: pw[0],
            active: false,
            pontos: 0,
            curTime: Date.now()
        }
        this.levelUp = this.levelUp.bind(this)
        this.Word = this.Word.bind(this)
    }
    Word(palavra, mobile) {
    
        var embaralha = [];

        var sorteio, max = palavra.length;
        const palavraArr = palavra.toString().split("")        
        for (let i = 0; i < max; i++) {
            sorteio = Math.floor(Math.random() * (max - i));
            embaralha[i] = (palavraArr.splice(sorteio, 1))            
        }
        var drop = [], letra=[], espaco=[], retorno=[];
        if (mobile) {
            for (let i = 0; i < max; i++){
                drop.push(<DropArea column={1} row={i+1}  key={palavra[i]+embaralha[i]+i}  mobile={mobile}/>)
                letra.push(<Letra column={1} row={i + 1} id={embaralha[i]} key={palavra[i] + embaralha[i] + i} mobile={mobile}/>)
                espaco.push(<Espaco column={2} row={i + 1} id={palavra[i]} key={palavra[i]+embaralha[i]+i} falses={0} trues={0} first={0} undropped={0}  mobile={mobile}/>)
            }  
        }
        else {
            for (let i = 0; i < max; i++){
                drop.push(<DropArea row={2} column={i+1}  key={palavra[i]+embaralha[i]+i}  mobile={false}/>)
                letra.push(<Letra row={2} column={i + 1} id={embaralha[i]} key={palavra[i] + embaralha[i] + i} mobile={false}/>)
                espaco.push(<Espaco row={1} column={i + 1} id={palavra[i]} key={palavra[i]+embaralha[i]+i} falses={0} trues={0} first={0} undropped={0}  mobile={false}/>)
            }            
        }
        retorno.push(drop)
        retorno.push(letra)
        retorno.push(espaco)

        return retorno
    }
    levelUp(cel) {
          
        var cor = sessionStorage.getItem("correc")
        if (cor === "true") {
            if (this.state.fase < this.state.level) {
                this.setState(prevState => ({
                    fase: prevState.fase + 1,
                    word: this.state.palavra[this.state.fase],
                    active: false
                }))
                Swal.fire({
                        title: "PARABÉNS",
                        text: "A resposta está correta",
                        imageUrl: feliz,
                        showCloseButton: true,
                        showCancelButton: false,
                        showConfirmButton: false,
                        padding:'3em',
                        timer: 2000,
                        width: cel ? 300 : 600
                    })
            }
            else {   
                Swal.fire({
                    title: "<span style='color:#fff'>PARABÉNS!</span>",
                    html: "<span style='color:#fff'>Você passou para a próxima fase ! \n Encontre as próximas palavras para finalizar o jogo!</span>",
                    imageUrl: felizEstrela,
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Continuar&nbsp;<img src='play.png' style='display:flex-inline; vertical-align:middle'/>",
                    confirmButtonColor: '#7b79f1',
                    padding:cel ? '2em 1em':'5em',
                    background:" #2a279d url('https://media3.giphy.com/media/QBehwGHH9M6fXxPaPh/giphy.gif')",
                    timer: 4000,
                    width: cel ? 300 : 600
                    
                })
                if (!(this.state.level + 1 === 6)){
                    const pw = RandomWord(this.state.level + 1, this.props.location.tema)
                    this.setState(prevState => ({
                        fase: 1,
                        level : prevState.level + 1,
                        palavra: pw,
                        word: pw[0],
                        active: true
                    }))
                    
                }
            }
        }
        else{
            Swal.fire({
                title: "TENTE NOVAMENTE",
                text: "Não desista!",
                imageUrl:X,
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
                padding:'3em',
                timer: 2000,
                width: cel ? 300 : 600
            })
        }
    }
    
    render() {  
        console.log(this.state.curTime)
        const cel = window.innerWidth < 500
        const desktop = {
            display:"flex" , position:"absolute", top:"92.5%", right:"15%", alignItems:"center"
        }
        const mobile = {
            display: "flex", alignItems: "center", flexWrap: "wrap-reverse", width: "12em", justifyContent: "center"
        }
        return (
            <div  onKeyPress={(e) => console.log("sim")} style={{display:"flex", flexWrap:"wrap-reverse", justifyContent:"center", alignItems:"strech", height: this.props.mobile?"80%":"40%"}}>
                <TemplateEscuro mobile={this.props.mobile} id={this.state.word[1]} font='roboto' size="1em" bolinhas={true} level={this.state.level} fase={this.state.fase}/>
                 <div style={{display:"flex", position:cel?"absolute":"static",left:cel?"10vw":"0", alignSelf: "center", justifyContent: "center"}}>
                    <div className="grid" style={{ gridRowGap: this.props.mobile ? '0' : '1em'}}>
                        <DndProvider backend={this.props.mobile ? TouchBackend : HTML5Backend}>
                            {this.Word(this.state.word[0], this.props.mobile)}
                        </DndProvider>

                    </div>
                    <div style={this.props.mobile ? mobile : desktop}>
                        <div style={{ display: "flex", flexWrap: "wrap", width: "150px", alignItems: "strech", justifyContent: "center", height:"50%"}}>
                            <span>
                                <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                    <a onClick={() => this.forceUpdate()} className="botao-redondo lilas" title="Embaralhar">
                                        <img src={resetar} alt="resetar"/>
                                    </a>

                                </span>
                                <small style={{ display: this.props.mobile ? "block" : "none", paddingLeft:"1em", paddingRight:"1em"}} >Embaralhar</small>
                            </span>
                            <span>
                                <ConditionalLink level={this.state.level} time={this.state.curTime}>
                                <span style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <a onClick={() => this.levelUp(cel, stop)} className="botao-redondo escuro" title="Enviar resposta">
                                            <img src={enviar} alt="enviar"/>
                                        </a>
                                    </span>
                                    </ConditionalLink>
                                <small style={{ display: this.props.mobile ? "block" : "none"}} >Enviar resposta</small>
                            </span>
                        </div>
                        <Fase level={this.state.level} mobile={this.props.mobile} location={this.props.location} stop={this.state.level===2 ? true :false }/>
                        <a className="botao-redondo rosa" style={{ display: this.props.mobile ? "none" : "flex" }} title="Comandos" onClick={() => Swal.fire({
                            title: "<span>Comandos</span>",
                            html: "<div style='background-color:rgba(251, 132, 148, 0.2); border-radius:16px; text-align:left'><span style='display:flex'><strong style='padding: 1em' >ENTER</strong><strong style='padding-top: 1em'>-</strong><div style='padding:1em'>verifica a resposta</div></span><span style='display:flex'><strong style='padding-left: 1em; padding-right: 1em' >SPACE</strong><strong>-</strong><div style='padding-left: 1em; padding-right: 1em' >embaralha a palavra novamente</div></span><span style='display:flex'><strong style='padding: 1em' >BACKSPACE</strong><strong style=' padding-top: 1em'>-</strong><div style='padding: 1em' >remove o último caractere inserido</div></span></div>",
                            showCloseButton: true,
                            showCancelButton: false,
                            confirmButtonColor: 'rgb(251, 132, 148)',
                            width: cel ? 300 : 600                            
                        })}>
                            <img src={teclado} alt="teclado"/>
                        </a> 
                    </div>
                </div>
            </div>
        )    
    }
}

/**
 * TODO
 * lógica:
 * -não deixar passar de nivel com espaço vazio incial
 * -botoes compartilhar (inicial e final)
 * 
 * https://media3.giphy.com/media/QBehwGHH9M6fXxPaPh/giphy.gif
 * https://i.giphy.com/media/5QStNXJ9luL8FYjI42/giphy.webp
 * https://media0.giphy.com/media/feg7YjzwtwuitMcmLR/giphy.gif
 * https://i.giphy.com/media/jQE07RpzMDmwCras0S/giphy.webp
 * https://i.giphy.com/media/fvMy0610Z0uJ87KYb9/giphy.webp
 * https://media2.giphy.com/media/f9dk42HSu0AM39kSMF/giphy.gif
 * 
 */