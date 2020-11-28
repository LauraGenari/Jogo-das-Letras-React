import React from 'react'
import Letra from './Letra'
import Espaco from './Espaco'
import DropArea from './DropArea'

import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Game(){
    const mobile = window.innerWidth < 400


    return (
        <div className="grid">
            <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
                <DropArea row="1" column="1"/>
                <DropArea row="1" column="2"/>
                <DropArea row="1" column="3"/>
                <DropArea row="1" column="4"/>
                <DropArea row="1" column="5"/>

                <Letra id="a" row="1" column="1" />
                <Letra id="b" row="1" column="2" />
                <Letra id="c" row="1" column="3" />
                <Letra id="d" row="1" column="4" />
                <Letra id="e" row="1" column="5" />            
        
                <Espaco id="a" row="2" column="1" />                
                <Espaco id="b" row="2" column="2" />                
                <Espaco id="c" row="2" column="3" />                
                <Espaco id="d" row="2" column="4" />                
                <Espaco id="e" row="2" column="5" />
                                            
            </DndProvider>
        </div>
    );
}

/*
criar um use state pra cada letra, pra monitorar o lugar inicial e o drop

criar função pra randomizar a ordem das letras e preencher os espaços vazios
(tb garantir q tenha espaços em branco)

SAO 18 LETRAS AAAAAAAAA

pegar palavra
ver qtd de letras
sortear
deixar os espaços s letras com d-none
ajustar grid

*/