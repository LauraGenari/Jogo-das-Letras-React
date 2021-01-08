import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';

var tempo;

export function Pontuador() {
  return Math.round(10000 / tempo ) * 5
}
const Stopwatch = ({auto}) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    render={({ formatted, seconds, minutes, hours }) => {        
      tempo = seconds+minutes*60+hours*3600
      return (
        <div>
          {formatted}
        </div>
      );
    }}
   />
);
 
export default Stopwatch;