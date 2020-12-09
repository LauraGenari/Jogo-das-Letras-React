import Letra from './Letra'
import Espaco from './Espaco'
import DropArea from './DropArea'
import React, {useState} from 'react'
import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import TemplateEscuro from '../TemplateEscuro';
import TemplateLilas from '../TemplateLilas';
import Swal from 'sweetalert2'
import {RandomWord} from '../RandomWord'

function SwalEnviar(fase, level,{ increaseFase, increaseLevel}, first) {

    console.log("level: " + level + " fase: " + fase)
    var word, palavra;
     
        var cor = sessionStorage.getItem("correc")
        if (cor === "true") {
            if (fase < level) {
                console.log("+fase")
                increaseFase(fase+1)
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
                console.log("+level")
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
                increaseFase(1)
                increaseLevel(level + 1)
                palavra = RandomWord(level)
            }
            word = palavra[fase - 1]
            console.log("palavra da rodada = " + word)
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
    return word;
} 

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


export default function Game({mobile, first}){
    const [fase, increaseFase] = useState(1)
    const [level, increaseLevel] = useState(1) 

    var word = RandomWord(1)[0]

    return (
        <div>
            <TemplateEscuro mobile={mobile} id={word[1]} font='roboto' size="1em" />
            <TemplateLilas mobile={mobile} />
            <div className="grid">
                <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
                    {Word(word[0], mobile)}
                </DndProvider>
            </div>
            <div style={{ display: "flex" }}>
                <a onClick={() => SwalEnviar(fase, level, {increaseFase, increaseLevel}, first)} className="botao-redondo escuro">
                    <img src="/img/enviar.png" alt="enviar" />
                </a>
                <a className="botao-redondo lilas">
                    <img src="/img/resetar.png" alt="resetar" />
                </a>
                <a className="botao-redondo rosa">
                    <img src="/img/teclado.png" alt="resetar" />
                </a>
            </div>
        </div>
    )

}

/*first -> sorteava 2x pq nunca ficava falso
sem first-> apenas conteudo 1 -> nao muda o level pq n é um componente

** transformar em class e mudar state
** correction virar componente
** volta pro first (alias, pq ele sorteava duas vezes, como se fosse vdd, mas n mostrava o alert 2x)
*/