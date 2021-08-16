import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/usersActions';
import StarRating from '../StarRating';

class MovieDetail extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getMovies('detail', this.props.match.params.name);
    }

    render() {
        const { movies } = this.props.movies;

        return (
            <div className="container-fluid" style={{ marginLeft: '-15px' }}>
                <div className="col-md-12 h2 text-center mb-5 font-weight-bold">{movies.Title}</div>
                <div className="d-flex flex-row">                    
                    <div className="col-md-12 row mx-0">
                        <div className="col-md-3">
                            <img className="card-img-top mb-5" src={movies.Poster} alt="" />
                        </div>
                        <div className="col-md-8 row mx-0">
                            <div className="clearfix px-4 mb-2">
                                <div className="float-left mt-1">
                                    <StarRating rating={Number(movies.imdbRating)} />
                                </div>
                                <div className="card-footer-badge float-right badge badge-primary badge-pill">{movies.imdbRating}</div>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Actors</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <div className="col-md-9">
                                    <h5>{movies.Actors}</h5>
                                </div>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Director</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <h5 className="col-md-9">{movies.Director}</h5>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Writer</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <h5 className="col-md-9">{movies.Writer}</h5>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Genre</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <h5 className="col-md-9">{movies.Genre}</h5>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Country</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <h5 className="col-md-9">{movies.Country}</h5>
                            </div>
                            <div className="col-md-12 row mx-0">
                                <h5 className="col-md-2 font-weight-bold">Awards</h5>
                                <h5 className="font-weight-bold">:</h5>
                                <h5 className="col-md-9">{movies.Awards}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="col-md-12">
                        <p className="col-md-12">
                            {movies.Plot}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps  = (state) => ({movies:state.movies})

export default connect(mapStateToProps, {getMovies})(MovieDetail)