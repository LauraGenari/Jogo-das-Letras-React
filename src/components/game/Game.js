import Letra from './Letra'
import Espaco from './Espaco'
import DropArea from './DropArea'
import React, {Component} from 'react'
import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import TemplateEscuro from '../TemplateEscuro';
import TemplateLilas from '../TemplateLilas';
import Swal from 'sweetalert2'
import { RandomWord } from './RandomWord'
import Fase from './TemplateFases'
import {Link} from 'react-router-dom';

const ConditionalLink = ({ children, level }) => {
    console.log("aqui")
    if((level + 1 === 3))
        return <Link to='final'>{children}</Link> 
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
            active: false
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
                        imageUrl: "/feliz.png",
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
                    imageUrl: "/feliz-estrela.png",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Continuar&nbsp;<img src='/play.png' style='display:flex-inline; vertical-align:middle'/>",
                    confirmButtonColor: '#7b79f1',
                    padding:cel ? '2em 1em':'5em',
                    background: "#2a279d url('https://media3.giphy.com/media/QBehwGHH9M6fXxPaPh/giphy.gif",
                    timer: 4000,
                    width: cel ? 300 : 600
                    
                })
                if (this.state.level + 1 === 6){
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
                imageUrl: "/X.png",
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
       //console.log("Level: " + this.state.level + "Fase: " + this.state.fase)
       //console.log(this.state.active)
        

        const cel = window.innerWidth < 500
        const desktop = {
            display:"flex" , position:"absolute", top:"92.5%", right:"10%", alignItems:"center"
        }
        const mobile = {
            display: "flex", alignItems: "center", flexWrap: "wrap-reverse", width: "12em", justifyContent: "center"
        }
        return (
            <div style={{display:"flex", flexWrap:"wrap-reverse", justifyContent:"center", alignItems:"strech", height: this.props.mobile?"80%":"40%"}}>
                <TemplateEscuro mobile={this.props.mobile} id={this.state.word[1]} font='roboto' size="1em" bolinhas={true} level={this.state.level} fase={this.state.fase}/>
                <TemplateLilas mobile={this.props.mobile} game={cel ? true : false}/>
                <div style={{display:"flex", position:cel?"absolute":"static",left:cel?"10vw":"0"}}>
                    <div className="grid" style={{ gridRowGap: this.props.mobile ? '0' : '1em'}}>
                        <DndProvider backend={this.props.mobile ? TouchBackend : HTML5Backend}>
                            {this.Word(this.state.word[0], this.props.mobile)}
                        </DndProvider>

                    </div>
                    <div style={this.props.mobile ? mobile : desktop}>
                        <div style={{ display: "flex", flexWrap: "wrap", width: "150px", alignItems: "strech", justifyContent: "center", height:"50%"}}>
                            <span>
                                <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                    <a onClick={() => this.forceUpdate() } className="botao-redondo lilas">
                                        <img src={  window.location.origin + "/resetar.png"} alt="resetar"/>
                                    </a>

                                </span>
                                <small style={{ display: this.props.mobile ? "block" : "none", paddingLeft:"1em", paddingRight:"1em"}} >Embaralhar</small>
                            </span>
                            <span>
                                <ConditionalLink level={this.state.level}>
                                    <span style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                        <a onClick={() => this.levelUp(cel)} className="botao-redondo escuro">
                                            <img src={  window.location.origin + "/enviar.png"} alt="enviar"/>
                                        </a>
                                    </span>
                                </ConditionalLink>
                                <small style={{ display: this.props.mobile ? "block" : "none"}} >Enviar resposta</small>
                            </span>
                            <span style={{display: cel ? "block" : "none" }}>
                                <a onClick={() => Swal.fire({
                                    title: "SAIR DO JOGO",
                                    text: "Tem certeza que deseja sair do jogo?",
                                    imageUrl: "/exclamacao.png",
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    showConfirmButton: true,
                                    padding:'3em',
                                    width: cel ? 400 : 600,
                                    confirmButtonText:'SIM',
                                    cancelButtonText: 'NÃO',
                                    confirmButtonColor: '#fff',
                                    cancelButtonColor: '#fff',
                                }) 
                                }>
                                    <img alt="sair" src={window.location.origin + "/sair-preto.png"}  style={{ padding: "1em"}}/>
                                </a>
                                <a><img alt="som" src={ window.location.origin + "/sem-som-preto.png"}  style={{ padding: "1em"}}/></a>

                            </span>
                        </div>
                        <Fase level={this.state.level} mobile={this.props.mobile}/>
                        <a className="botao-redondo rosa" style={{ display: this.props.mobile ? "none" : "flex" }}>
                            <img src={  window.location.origin + "/teclado.png"} alt="resetar"/>
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
 * 
 * https://media3.giphy.com/media/QBehwGHH9M6fXxPaPh/giphy.gif
 * https://i.giphy.com/media/5QStNXJ9luL8FYjI42/giphy.webp
 * https://media0.giphy.com/media/feg7YjzwtwuitMcmLR/giphy.gif
 * https://i.giphy.com/media/jQE07RpzMDmwCras0S/giphy.webp
 * https://i.giphy.com/media/fvMy0610Z0uJ87KYb9/giphy.webp
 * https://media2.giphy.com/media/f9dk42HSu0AM39kSMF/giphy.gif
 * 
 */