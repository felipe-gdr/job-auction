import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getJob } from '../../../common/mocks';

import View from './view';

const actions = {
  onClick: action('onClick'),
};

const Container = ({ children }) => {
    const [job, setJob] = useState(getJob());

    const notifyJob = () => setJob(getJob());

    return (
        <div>
            {children(job)}
            <button onClick={notifyJob}>Notifiy job </button>
        </div>
    )
}

storiesOf('JobNotification', module)
    .add('default', () => {
        return <Container>
            {job =>
                <View job={job} {...actions} />
            }
        </Container>
    }); 