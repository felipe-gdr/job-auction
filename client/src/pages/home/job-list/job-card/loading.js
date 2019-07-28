import React from 'react';
import Card from 'react-bootstrap/Card';

import { CardContainer } from './styled';

import Skeleton from 'react-loading-skeleton';

export default () => (
    <CardContainer>
        <Card.Header><Skeleton /></Card.Header>
        <Card.Body>
            <Skeleton count={7} />
        </Card.Body>
        <Card.Footer>
            <Skeleton />
        </Card.Footer>
    </CardContainer>
)