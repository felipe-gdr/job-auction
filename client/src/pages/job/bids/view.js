import React, { useEffect } from 'react';

import NonEmpty from './non-empty';
import Empty from './empty';

export default ({ subscribeToNewBids, bids, ...otherProps }) => {
    useEffect(() => subscribeToNewBids(), [subscribeToNewBids]);

    return bids && bids.length > 0
        ? <NonEmpty bids={bids} {...otherProps} />
        : <Empty />;
}