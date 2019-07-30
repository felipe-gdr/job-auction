import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './home';
import Job from './job'

export default () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/job/:id" component={Job} />

            <CssBaseline />
        </div>
    </Router>
);