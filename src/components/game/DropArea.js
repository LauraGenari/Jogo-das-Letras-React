import React from 'react';
import { useDrop } from 'react-dnd';

export default function DropArea({row, column}) {
  
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      item.row = row;
      item.column = column;
    }
  })

  return (<span ref={drop} className="droparea" style={{gridColumn:column, gridRow:row}}></span>)
    
}