import React, {useState} from 'react';
import { useDrop } from 'react-dnd';

export default function Espaco({id, row, column, trues, falses, first}) {
  
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      item.row = row;
      item.column = column;
      if (item.name != id) {
        if (first == 0) {
          first = -1;
        }
        falses++
      }
      else {
        if (first == 0){
          first = 1
        }
        trues++
      }
      console.log(first, id,trues- falses)
      if (first == 1 ) {
        if (trues - falses <= 0) {
          sessionStorage.setItem("correc", "false");      
        } else {
          sessionStorage.setItem("correc", "true")
        }
      }
        
      else if (first == -1) {
        if (trues - falses < 0) {
          sessionStorage.setItem("correc", "false");      
        } else {
          sessionStorage.setItem("correc", "true")
        }
      }
    }
  })
 
  return (<span ref={drop} className="espaco" style={{ gridColumn:column, gridRow:row}}></span>)
    
}