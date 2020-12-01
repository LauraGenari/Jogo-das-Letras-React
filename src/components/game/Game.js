import Letra from './Letra'
import Espaco from './Espaco'
import DropArea from './DropArea'
import React, {Component} from 'react'
import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

import palavraAedes from '../content/XMLAedes'; 
import palavraDengue from '../content/XMLDengue'; 
import palavraZika from '../content/XMLZika'; 
import palavraChikungunya from '../content/XMLChikungunya'; 
import palavraFebre from '../content/XMLFebre'; 

import Swal from 'sweetalert2'

export default class Game extends Component {

    Word(palavra, mobile) {
        var embaralha = [];

        var sorteio, max = palavra.length;
        const palavraArr = palavra.split("")        
        for (let i = 0; i < max; i++) {
            sorteio = Math.floor(Math.random() * (max - i));
            embaralha[i] = (palavraArr.splice(sorteio, 1))            
        }
        var drop = [], letra=[], espaco=[], retorno=[];
        if (mobile) {
            for (let i = 0; i < max; i++){
                drop.push(<DropArea column={1} row={i+1}  key={i}/>)
                letra.push(<Letra column={1} row={i + 1} id={embaralha[i]} key={i}/>)
                espaco.push(<Espaco column={2} row={i + 1} id={palavra[i]} key={i} falses={0} trues={0} first={0}/>)
            }  
        }
        else {
            for (let i = 0; i < max; i++){
                drop.push(<DropArea row={2} column={i+1}  key={i}/>)
                letra.push(<Letra row={2} column={i + 1} id={embaralha[i]} key={i}/>)
                espaco.push(<Espaco row={1} column={i + 1} id={palavra[i]} key={i} falses={0} trues={0} first={0}/>)
            }            
        }
        retorno.push(drop)
        retorno.push(letra)
        retorno.push(espaco)
        return retorno
    }
    
    SwalEnviar() {
        var cor = sessionStorage.getItem("correc")
        if (cor == "true")
            Swal.fire({
                title: "PARABÉNS",
                text: "A resposta está correta",
                imageUrl: "/img/feliz.png",
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
                padding: '3em'
            })
        else
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

    render() {
        var tema = this.props.location.tema;
        const mobile = window.innerWidth < 400;
        var palavra;
        
        if (tema === "Aedes")
            palavra = palavraAedes();
        else if (tema === "Chikungunya")
            palavra = palavraChikungunya();
        else if (tema === "Dengue")
            palavra = palavraDengue();
        else if (tema === "Zika")
            palavra = palavraZika();
        else if (tema === "FebreAmarela")
            palavra = palavraFebre();
            

        return (
            <div>
                <div class="grid">
                    <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
                        {this.Word(palavra, mobile)}                                
                    </DndProvider>
                </div>
                <div style={{display:"flex"}}>
                    <a onClick={this.SwalEnviar} className="botao-redondo escuro">
                        <img src="/img/enviar.png" alt="enviar"/>   
                    </a>
                    <a className="botao-redondo lilas">
                        <img src="/img/resetar.png" alt="resetar"/>   
                    </a>
                    <a className="botao-redondo rosa">
                        <img src="/img/teclado.png" alt="resetar"/>   
                    </a>

                </div>
            </div>
            )
        
    }
}

/*
1- fases 

2-detectar drops

3- bota de pe pra celular
    levar img no drag (no desktop fica opaco por default e mobile nem aparece, por defaul)

4- demais ajustes da tela
*/