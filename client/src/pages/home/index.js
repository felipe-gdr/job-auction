import React, { useState } from 'react';

import Search from './search';
import JobList from './job-list';
import JobNotification from './job-notification';

export default () => {
  const [tag, setTag] = useState(null);

  return (
    <div className="App">
      <Search onSelect={setTag} selected={tag}/>
      <JobList tag={tag}/>
      <JobNotification />
    </div>
  );
}