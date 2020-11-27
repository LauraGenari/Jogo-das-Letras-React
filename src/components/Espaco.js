import React, {useState} from 'react';
import { useDrop } from 'react-dnd';

export default function Espaco({id, row, column, idAnterior, rowAnterior, columnAnterior}) {

  const [linha, setRow] = useState(row)
  const [coluna, setColumn] = useState(column)
  
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      item.row = row;
      item.column = column;

      if (idAnterior == null) {
        idAnterior = item.id 
        rowAnterior = item.row
        columnAnterior = item.column
      }
      else {
        setRow(rowAnterior)
        setColumn(columnAnterior)
      }
    }
  })


  return (<span ref={drop} className="espaco" style={{gridColumn:column, gridRow:row}}></span>)
    
}