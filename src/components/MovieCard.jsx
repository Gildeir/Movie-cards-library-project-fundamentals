// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, imagePath, rating } = movie;
    const { imagePath } = movie;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyLine">{ movie.storyline }</p>
          <img className="movie-card-image" src={ imagePath } alt={ movie.title } />
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
