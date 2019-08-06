import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StoryRouter from 'storybook-react-router';

import { getRandomJob } from '../../../common/mocks';

import View from './view';

const actions = {
    onClick: action('onClick'),
};

const Container = ({ children }) => {
    const [job, setJob] = useState(getRandomJob());

    const notifyJob = () => setJob(getRandomJob());

    return (
        <div>
            <Typography variant="h6">
                Notification to user when a new job is created
            </Typography>
            {children(job)}
            <Button variant="contained" onClick={notifyJob} >Simulate a new incoming job</Button>
        </div>
    )
}

storiesOf('Home Page|New job notification', module)
    .addDecorator(StoryRouter())
    .add('default state', () => {
        return <Container>
            {job =>
                <View job={job} {...actions} />
            }
        </Container>
    }); 