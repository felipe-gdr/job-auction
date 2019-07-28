import React from 'react';
import { ListItem } from './styled';

import { Loading as LoadingCard } from './job-card';

const COUNT = 5;

export default () => (
    <div>
        {Array(COUNT).fill().map((_, i) => <ListItem key={i}><LoadingCard /></ListItem>)}
    </div>
);