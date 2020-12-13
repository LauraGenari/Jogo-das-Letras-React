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
import {RandomWord} from '../RandomWord'

function Word(palavra, mobile) {
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
            drop.push(<DropArea column={1} row={i+1}  key={i}/>)
            letra.push(<Letra column={1} row={i + 1} id={embaralha[i]} key={i}/>)
            espaco.push(<Espaco column={2} row={i + 1} id={palavra[i]} key={i} falses={0} trues={0} first={0} undropped={0}/>)
        }  
    }
    else {
        for (let i = 0; i < max; i++){
            drop.push(<DropArea row={2} column={i+1}  key={i}/>)
            letra.push(<Letra row={2} column={i + 1} id={embaralha[i]} key={i}/>)
            espaco.push(<Espaco row={1} column={i + 1} id={palavra[i]} key={i} falses={0} trues={0} first={0} undropped={0}/>)
        }            
    }
    retorno.push(drop)
    retorno.push(letra)
    retorno.push(espaco)
    return retorno
}

export default class Game extends Component{
    
    constructor(props) {
        super(props);
        const pw = RandomWord(1, this.props.location.tema)
        this.state = {
            fase: 1, 
            level: 1,
            palavra: pw,
            word: pw[0] 
        }
        this.levelUp = this.levelUp.bind(this)
    }

    levelUp() {
          
        var cor = sessionStorage.getItem("correc")
        if (cor === "true") {
            if (this.state.fase < this.state.level) {
                this.setState(prevState => ({
                    fase: prevState.fase + 1,
                    word: this.state.palavra[this.state.fase]
                }))
                Swal.fire({
                        title: "PARABÉNS",
                        text: "A resposta está correta",
                        imageUrl: "/img/feliz.png",
                        showCloseButton: true,
                        showCancelButton: false,
                        showConfirmButton: false,
                        padding: '3em'
                    })
            }
            else { 
                if (this.state.level + 1 === 6) {
                    console.log("PAROU")
                }
                else {
                    const pw = RandomWord(this.state.level + 1, this.props.location.tema)
                    this.setState(prevState => ({
                        fase: 1,
                        level : prevState.level + 1,
                        palavra: pw,
                        word: pw[0]
                    }))
                    
                }  
                Swal.fire({
                    title: "<span style='color:#fff'>PARABÉNS!</span>",
                    html: "<span style='color:#fff'>Você passou para a fase ! \n Encontre as próximas  palavras para finalizar o jogo!</span>",
                    imageUrl: "/img/feliz-estrela.png",
                    showCloseButton: false,
                    showCancelButton: false,
                    confirmButtonText: "Continuar&nbsp;<img src='/img/enviar.png'/>",
                    confirmButtonColor: '#7b79f1',
                    padding: '5em',
                    background: '#2a279d'
                })
            }
        }
        else{
            Swal.fire({
                title: "TENTE NOVAMENTE",
                text: "Não desista!",
                imageUrl: "/img/X.png",
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
                padding: '3em'
            })
        }
    }
    
    render() {  
        console.log("Level: " + this.state.level + "Fase: " + this.state.fase)
        return (
            <div>
                <TemplateEscuro mobile={this.props.mobile} id={this.state.word[1]} font='roboto' size="1em" />
                <TemplateLilas mobile={this.props.mobile} />
                <div className="grid">
                    <DndProvider backend={this.props.mobile ? TouchBackend : HTML5Backend}>
                        {Word(this.state.word[0], this.props.mobile)}
                    </DndProvider>
                </div>
                <div style={{ display: "flex" }}>
                    <a onClick={() => this.levelUp()} className="botao-redondo escuro">
                        <img src="/img/enviar.png" alt="enviar" />
                    </a>
                    <div style={{display:"none"}}>
                        <a className="botao-redondo lilas">
                            <img src="/img/resetar.png" alt="resetar" />
                        </a>
                        <a className="botao-redondo rosa">
                            <img src="/img/teclado.png" alt="resetar" />
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
 * -reordenar letras e reset  --- reload espaço, se o elemento pai é re-renderizado, reload. Usar level e fase 
 * -cronometro 
 * -fase no swal
 * -confetes
 * -timer no swal
 * 
 * css:
 * -fazer bolinhas de fase
 * -fazer bloco azul de level
 * 
 * logica:
 *  -colorir bolinhas de fase
 *  -colorir blocos de level
 * 
 */