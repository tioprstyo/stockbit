import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import MovieDetail from './Movie/MovieDetail';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Stockbit Movies',
            search: ''
        };
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value });
    };

    render() {
        return (
            <Router>
                <div>
                    <Header title={this.state.title} search={this.state.search} handleChange = {this.handleChange} />
                    <div className="mt-5">
                        <Route exact path="/">
                            <Movies />
                        </Route>
                        <Route path="/details/:name" render={(props) => <MovieDetail {...props} />} />
                    </div>
                </div>
            </Router>
        );
    }
}