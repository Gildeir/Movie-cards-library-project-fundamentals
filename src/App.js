import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';

// import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
