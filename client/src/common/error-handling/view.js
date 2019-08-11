import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import { withStyles } from '@material-ui/styles';

import styles from './styles';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // TODO log error somewhere (Splunk, etc.)
  }

  render() {
    const { children, classes } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Typography component="div" color="secondary" className={classes.root}>
          <ErrorIcon color="secondary" /> Unexpected error :-(
        </Typography>
      );
    }

    return children;
  }
}

export default withStyles(styles)(ErrorBoundary);
