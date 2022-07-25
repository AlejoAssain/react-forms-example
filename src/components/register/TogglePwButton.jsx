import React from 'react';

const TogglePwButton = ({ viewPassword, ...props}) => {
  return (
    <button { ...props }>
      { viewPassword ? "Hide" : "Show" }      
    </button>
  );
}

export default TogglePwButton;
