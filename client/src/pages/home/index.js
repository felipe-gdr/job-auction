import React, { useState } from 'react';

import Search from './search';
import JobList from './job-list';
import JobSubscription from './job-subscription';

export default () => {
  const [tag, setTag] = useState(null);

  return (
    <div className="App">
      <Search onChange={setTag}/>
      <JobList tag={tag}/>
      <JobSubscription />
    </div>
  );
}