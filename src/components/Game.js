import React, { useState } from 'react'
import Letra from './Letra'
import Espaco from './Espaco'
import { DndProvider} from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Game(){
    const mobile =  window.innerWidth < 400

    const [unmoved, setMoved] = useState(true)
    const letra = <Letra setMoved={setMoved} id="a"/>;

    return (
        <div className="container">
            <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
            <span>    
                {unmoved && letra}
            </span>
            <Espaco id="a">
                {!unmoved && letra}
            </Espaco>
            <Espaco id="a">
                {!unmoved && letra}
            </Espaco>    
        </DndProvider>

        </div>
    );
}