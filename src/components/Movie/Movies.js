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
            poster: '',
            loading: false,
            page: 1,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.props.getMovies('', null, 1, []);
        const { movies } = this.props.movies
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handlePopup(e) {
        this.setState({ poster: e, openModal: true });
    }

    handleScroll() {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

        if (bottom) {
            const { movies } = this.props.movies
            this.setState({ loading: true, page: this.state.page + 1 })
            this.props.getMovies('', null, this.state.page, movies);
            this.setState({ loading: false })
        }
    }

    render() {
        const { movies } = this.props.movies
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={movies} openPopUp={this.handlePopup.bind(this)} openModal={this.state.openModal} />
                        {this.state.loading ?
                            <div className="text-center py-5">Loading...</div>
                            : <div></div>
                        }
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