import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from '../components/nav';
import Home from './home';
import Job from './job';
import AddJob from './add-job';

import { Provider as JobProvider } from '../contexts/job-context';
import { Provider as UserProvider } from '../contexts/user-context';

export default () => (
  <Router>
    <div>
      <UserProvider>
        <Nav users={[]} />
        <Route path="/" exact component={Home} />

        <JobProvider>
          <Route path="/job/:id" component={Job} />
        </JobProvider>

        <Route path="/add-job" component={AddJob} />
      </UserProvider>
      <CssBaseline />
    </div>
  </Router>
);
