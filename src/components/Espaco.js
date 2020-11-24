import React, {useEffect} from 'react';
import { useDrop } from 'react-dnd'

export default function Espaco({ children }) {
  
  var dropado = false
  var dropped;
  const [, drop] = useDrop({
    accept: 'letra',
    collect: monitor => {
      dropped = monitor.didDrop()
    }
  })
  

  if (dropped) {
    useEffect((dropado) => {
        dropado = true;
    })
  }
  

  return (<span ref={drop} className="espaco">{ children && dropado }</span>)
    
}