import * as React from 'react';
//youtube video embedding component

export default function YTComponent ({ link }) {
  return (
    //div to style the embedded video
    <div style={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'}}>
    
      <iframe
        width="740"
        height="490"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{maxWidth: '100%',
            maxHeight: '100%',}}
      ></iframe>
    </div>
  );
};


