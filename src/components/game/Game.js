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

export default class Game extends Component {

    Word(palavra) {

        var embaralha = [];

        var sorteio, max = palavra.length;
        const palavraArr = palavra.split("")
        
        for (let i = 0; i < max; i++) {
            sorteio = Math.floor(Math.random() * (max - i));
            embaralha[i] = (palavraArr.splice(sorteio, 1))            
        }
        var drop = [], letra=[], espaco=[], retorno=[];

        for (let i = 0; i < max; i++){
            drop.push(<DropArea row={1} column={i+1}  key={i}/>)
            letra.push(<Letra row={1} column={i + 1} id={embaralha[i]} key={i}/>)
            espaco.push(<Espaco row={2} column={i + 1} id={palavra[i]} key={i}/>)
        }
        retorno.push(drop)
        retorno.push(letra)
        retorno.push(espaco)
        sessionStorage.setItem("correc", true)
        return retorno
    }
    


    render() {
        var tema = this.props.location.tema;
        const mobile = window.innerWidth < 400;
        var palavra
        if (tema == "Aedes")
            palavra = palavraAedes();
        else if (tema == "Chikungunya")
            palavra = palavraChikungunya();
        else if (tema == "Dengue")
            palavra = palavraDengue();
        else if (tema == "Zika")
            palavra = palavraZika();
        else if (tema == "FebreAmarela")
            palavra = palavraFebre();
            

        return (
            <div style={{display: "grid", gridTemplateColumns: "unset", gridTemplateRows: "1fr 1fr"}}>
                <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
                    {this.Word(palavra)}                                
                </DndProvider>
                <button onClick={
                    () => {
                        var cor = sessionStorage.getItem("correc")
                        if (cor == "true") console.log("DAO BAO RAPEIZE")
                        else console.log("DEU N")
                    }
                }>click</button>
                </div>
            )
        
    }
}

/*
1-
    for pra renderizar os espaços, droparea e letra
    random letras
    verificação letras corretas

2- ler dados xml 

3- bota de pe pra celular
    levar img no drag (no desktop fica opaco por default e mobile nem aparece, por defaul)

4- demais ajustes da tela
*/