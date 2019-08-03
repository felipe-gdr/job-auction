import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from '../components/nav';
import Home from './home';
import Job from './job'
import AddJob from './add-job'

export default () => (
    <Router>
        <div>
            <Nav users={[]}/>
            <Route path="/" exact component={Home} />
            <Route path="/job/:id" component={Job} />
            <Route path="/add-job" component={AddJob} />

            <CssBaseline />
        </div>
    </Router>
);