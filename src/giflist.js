import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const gif = props.gifs.map((image) => {
    return <Gif key={image.id} gif={image} />
  });

  return (
    <div id = 'giflist'>{gif}</div>
  );
};

export default GifList;