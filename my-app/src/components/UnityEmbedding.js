import * as React from 'react';

export default function UnityEmbedding ({ link }) {
    return (
        <p>
        <iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr=""
            mozallowfullscreen="true" src={link}
            width="810"
            height="640" 
            onmousewheel="" 
            webkitallowfullscreen="true">
                
            </iframe>
        </p>
    )
}