import React from 'react'

const Chunk = ({data, start, end, active, onClick}) => {
  let style = {
    color: '#000',
  };
  if (active) {
    style = {
      color: 'red',
    };
  }
  return <div style={style} onClick={onClick.bind(null, {start, end})}>{data} ({start} - {end})</div>;
};
export default Chunk
