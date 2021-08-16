import React from 'react';
import PropTypes from 'prop-types';

const getMovies = (movies, openPopUp) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie =>
                    <div className="movie-card" key={movie.imdbID}>
                        <div className="movie-card card">
                            <img className="card-img-top" onClick={() => openPopUp(movie.Poster)} src={movie.Poster} alt="" />
                            <div className="card-body">
                                <a className="card-title text-dark text-decoration-none" href={`/details/${movie.Title.replace(/\s+/g, '-').toLowerCase()}`}>{movie.Title}</a>
                                <h6 className="card-subtitle mb-2 mt-1 text-muted">{movie.imdbID}</h6>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies, props.openPopUp)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array
};

export default MovieList;