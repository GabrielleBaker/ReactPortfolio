import * as React from 'react';
import unity from '../Images/Gamedev/Unity.png';


export default function UnityLink ({ link }) {
    return (
        <a href={link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <img src={unity} style={{width:'7%'}}/>
        </a>

        
    )
}