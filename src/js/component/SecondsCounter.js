import React from 'react';
import Proptypes from 'prop-types';
import Seconds from './Seconds';

const SecondsCounter = (props) => {
  let secondsValue = props.seconds;
  return (
    <div className='container-fluid h-75 bg-dark text-light text-center'>
      <h1><Seconds initialSeconds={secondsValue} /></h1>
    </div>
  );
};

SecondsCounter.propTypes = {
  seconds: Proptypes.number
};
export default SecondsCounter;