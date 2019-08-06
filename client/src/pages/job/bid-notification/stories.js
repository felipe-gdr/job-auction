import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { getBid } from '../../../common/mocks';

import View from './view';

const Container = ({ children }) => {
    const [bid, setBid] = useState(getBid());

    const notifyBid = () => setBid(getBid());

    return (
        <div>
            <Typography variant="h6">
                Notification to user when a new bid is created
            </Typography>
            {children(bid)}
            <Button variant="contained" onClick={notifyBid}>Simulate a new incoming bid</Button>
        </div>
    )
}

storiesOf('Job page|New bid notification', module)
    .add('default state', () => {
        return <Container>
            {bid =>
                <View bid={bid} />
            }
        </Container>
    }); 