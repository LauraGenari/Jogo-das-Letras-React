import React from 'react';
import { useDrag } from 'react-dnd'

export default function Letra({setMoved, id}){

    const [{isDragging}, drag] = useDrag({
        item: {name:id, type:'letra' },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => { 
            const dropResult = monitor.getDropResult()
            if (dropResult && dropResult.name === {id}) {
                setMoved(true)
            } else {
                setMoved(false)
            }
        }
      })
    
    return (<span ref={drag} className="letra" style={{opacity: isDragging ? 0.3 : 1, cursor: 'move'}}>{id}</span>);
}

//a letra fica unmounted