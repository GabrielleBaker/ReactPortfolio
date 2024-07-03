import * as React from 'react';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function GHButton({link}){

    return(
        <Button 
        size="small" 
        startIcon={<GitHubIcon />} 
        href={link}
        target="_blank" //  new tab
        rel="noopener noreferrer" // security practice
        >Github</Button>
    )
}