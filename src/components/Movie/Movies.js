import React, { Component } from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import { getMovies } from '../../actions/usersActions';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Movies extends Component {

    constructor() {
        super();
        this.state ={
            openModal: false,
            poster: ''
        }
    }

    componentDidMount() {
        this.props.getMovies('', null)
    }

    handlePopup(e) {
        this.setState({ poster: e, openModal: true });
    }

    render() {
        const {movies} = this.props.movies
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={movies.Search} openPopUp={this.handlePopup.bind(this)} openModal={this.state.openModal} />
                    </div>
                </div>
                <Modal open={this.state.openModal} onClose={() => this.setState({ openModal: false })}>
                    <img className="card-img-top mt-5" src={this.state.poster} alt="" />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps  = (state) => ({movies:state.movies})

export default connect(mapStateToProps, {getMovies})(Movies)