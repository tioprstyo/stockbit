import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" onClick={props.openPopUp(props.movie.Poster)} src={props.movie.Poster} alt="" />
            <div className="card-body">
                <a className="card-title text-dark text-decoration-none" href={`/details/${props.movie.Title.replace(/\s+/g, '-').toLowerCase()}`}>{props.movie.Title}</a>
                <h6 className="card-subtitle mb-2 mt-1 text-muted">{props.movie.imdbID}</h6>
            </div>
        </div>
    </div>
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;