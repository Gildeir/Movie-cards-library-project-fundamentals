// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, imagePath, rating } = movie;
    const { imagePath } = movie;
    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <img src={ imagePath } alt={ movie.title } />
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
