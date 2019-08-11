import React from 'react';

import View from './view';
import { withRouter } from 'react-router';

const JobCard = ({ history, ...props }) => {
  const navigateToJob = job => history.push(`/job/${job.id}`);

  return <View onClick={navigateToJob} {...props} />;
};

export default withRouter(JobCard);
export { default as Loading } from './loading';
