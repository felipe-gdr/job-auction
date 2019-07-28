import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import formatRelative from 'date-fns/formatRelative'

import { CardContainer, BadgeContainer, DueDate } from './styled';

export default ({ job, onClick }) => {
    const { title, description, tags, user, dueDate, image, bidCount } = job;

    const [hover, setHover] = useState(false);

    const now = new Date(); 

    return (
        <CardContainer
            border={hover && 'info'}
            onClick={() => onClick(job)}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Subtitle>
                    by {user.displayName} <DueDate>due {formatRelative(new Date(dueDate), now)}</DueDate>
                </Card.Subtitle>
                <Card.Img variant="top" src={image} />
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                {
                    tags.map(tag => (<BadgeContainer key={tag} variant="info">{tag}</BadgeContainer>))
                }
            </Card.Footer>
        </CardContainer>
    );

}