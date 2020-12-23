import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
const Stopwatch = () => (
  <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({formatted}) => {
      return (
        <div>{formatted}</div>
      );
    }}
   />
);
 
export default Stopwatch;