import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob } from '../../../common/mocks';

import View from './view';

const actions = {
    onClick: action('onClick'),
};

const Container = ({ children }) => {
    const [jobs, setJobs] = useState([getJob()]);

    const addJob = () => setJobs([...jobs, getJob()]);
    const removeJob = job => setJobs(jobs.filter(j => j.id !== job.id));

    return (
        <div>
            {children(jobs, removeJob)}
            <button onClick={addJob}>add job </button>
        </div>
    )
}

storiesOf('JobNotification', module)
    .add('default', () => {
        return <Container>
            {(jobs, removeJob) =>
                <View jobs={jobs} {...actions} onRemoveJob={removeJob} />
            }
        </Container>
    }); 