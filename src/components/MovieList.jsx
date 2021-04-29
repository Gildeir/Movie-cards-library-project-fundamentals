// implement MovieList component here
/* 3 - Crie um componente < MovieList />
  Crie um componente que represente toda a área com os cartões de filmes. < MovieList /> deve receber uma prop movies, que é um array de objetos com informações de um filme.

O que será verificado:

Renderize o componente < MovieList /> */
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {

  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
