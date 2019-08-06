import React, { useState } from 'react';

import Search from './search';
import JobList from './job-list';
import JobNotification from './job-notification';
import BidNotification from '../../components/bid-notification';

import useStylesCommon from '../../common/styles';
import useStyles from './styles';

export default () => {
  const [tag, setTag] = useState(null);

  const classesCommon = useStylesCommon();
  const classes = useStyles();

  return (
    <div className={`${classesCommon.pageRoot} ${classes.root}`}>
      <Search onSelect={setTag} selected={tag} />
      <div className={classes.list} >
        <JobList tag={tag} />
      </div>
      <JobNotification />
      <BidNotification />
    </div>
  );
}