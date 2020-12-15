import React, { useState} from 'react';
import { useDrag } from 'react-dnd'

export default function Letra({id, row, column}) {
    
    const [linha, setRow] = useState(row)
    const [coluna, setColumn] = useState(column)
    
    const [{isDragging}, drag] = useDrag({
        item: {name:id, type:'letra', row:row, column:column},
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
        end(item) {
            if (item.row !== row || item.column !== column) {
                setColumn(item.column)
                setRow(item.row)
            }
        }
    })
           
        
    return (<span ref={drag} className="letra" style={{ opacity: isDragging ? 0.1 : 1, cursor: 'move' , gridRow:linha, gridColumn:coluna}}>{id}</span>);               
}
