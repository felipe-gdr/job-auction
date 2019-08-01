import React from 'react';

import Bids from './view';
import Empty from './empty';

export default props =>
    props.bids && props.bids.length > 0
        ? <Bids {...props} />
        : <Empty />;