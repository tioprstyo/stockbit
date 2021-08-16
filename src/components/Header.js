import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovies } from '../actions/usersActions';

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container row mx-0 mw-100">
            <div className="row">
                <i className="fa fa-film fa-2x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
            {
                    window.location.pathname === '/' ?
            <div className="row">
                <input type="text" placeholder="Search by keyword" onChange={props.handleChange} />
                <button type="submit" onClick={() => props.getMovies('', props.search ? props.search : null)}><i className="fa fa-search"></i></button>
                </div>
                    : <div></div>
            }
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};

const mapStateToProps  = (state) => ({movies:state.movies})

export default connect(mapStateToProps, {getMovies})(Header)
// export default Header;