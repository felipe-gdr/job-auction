import React, { useState } from 'react';

import styled from '@emotion/styled';

import Search from './search';
import JobList from './job-list';
import JobNotification from './job-notification';

const Notifications = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

export default () => {
  const [tag, setTag] = useState(null);

  return (
    <div className="App">
      <Search onChange={setTag}/>
      <JobList tag={tag}/>
      <Notifications>
        <JobNotification />
      </Notifications>
    </div>
  );
}