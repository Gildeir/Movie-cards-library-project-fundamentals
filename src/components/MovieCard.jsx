// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        Nome:
        {movie.title}
        {/*       ,
        {movie.title}
        ,
        {movie.storyline}
        ,
        {movie.rating}
        ,
        {movie.imagePath}
        ,
        <img src={ movie.imagePath } alt={ movie.title } /> */}
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
