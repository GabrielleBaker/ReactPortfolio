import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

function Header(props) {
  const { sections, image } = props;
  const theme = useTheme();
  // for changing the internal navigation toolbar to a vertical stack
  // on smaller screen sizes
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button 
          size="small" 
          startIcon={<GitHubIcon />} 
          href="https://github.com/GabrielleBaker"
          target="_blank" //  new tab
          rel="noopener noreferrer" // security practice
          >Github</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <img src={image} alt="Kit" style={{ height: '100px' }} 
          //Kit Baker image in the header
          />
        </Typography>
        <Button 
          size="small" 
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/kit-baker-86923922b/"
          target="_blank" 
          rel="noopener noreferrer" 
          >LinkedIn</Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ 
          justifyContent: 'space-between', 
          overflowX: 'auto' ,
          flexDirection: isSmallScreen ? 'column' : 'row',
        }} 
       
      >
        {sections.map((section) => (
          <Button
            component={RouterLink}
            color="inherit"
            noWrap
            key={section.title}
            to={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
