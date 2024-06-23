import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


function Footer(props) {
  const { description, title } = props;

  return (
    
    <Box 
      component="footer" 
      sx={{ bgcolor: 'background.paper', py: 6 }}>
 
      <Container 
        maxWidth="lg" 
        //line before footer
        sx={{ borderTop: 1, borderColor: 'divider' }}
        >
        <Typography variant="h6" align="center" gutterBottom 
        //title contains 'author:Kit Baker'
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          //description contains date site was updated
        >
          {description}
        </Typography>
     
      </Container>
    </Box>
  );
}
//check type of props
// checks type-> string
//is required= prop is mandatory
Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
