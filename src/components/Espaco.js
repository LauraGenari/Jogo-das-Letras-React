import React from 'react';
import { useDrop } from 'react-dnd';

export default function Espaco({id, row, column}) {
  
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      item.row = row;
      item.column = column;
    }
  })


  return (<span ref={drop} className="espaco" style={{gridColumn:column, gridRow:row}}></span>)
    
}