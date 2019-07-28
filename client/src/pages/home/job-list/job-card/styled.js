import styled from '@emotion/styled';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export const CardContainer = styled(Card)`
    width: 400px;
    cursor: pointer;
`

export const BadgeContainer = styled(Badge)`
    margin-right: 10px;
`;

export const DueDate = styled.span`
    font-size: 0.8em;
    color: #999
`;
