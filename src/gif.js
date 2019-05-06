import React from 'react';
//const LOADER = 'https://media.giphy.com/media/13nhjlnTv2Sr3a/giphy.gif';

    const Gif = (image) => {
        return (
            <div id = 'gif'>
      <img src={image.gif.images.downsized.url} />
    </div>
        ); 
    
};

export default Gif