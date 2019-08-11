import React from 'react';
import Skeleton from 'react-loading-skeleton';

import useStyles from './styles';

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <Skeleton height={40} />
    </div>
  );
};
