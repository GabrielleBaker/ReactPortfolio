import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';


function FeaturedPostsw(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={RouterLink} to={post.url}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{  width:'100%' , display: {  sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
            
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPostsw.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPostsw;
