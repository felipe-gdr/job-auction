import React, { useEffect } from 'react';

import NonEmpty from './non-empty';
import Empty from './empty';
import Loading from './loading';

export default ({ subscribeToNewBids, bids, loading, ...otherProps }) => {
    useEffect(() => subscribeToNewBids(), [subscribeToNewBids]);

    if (loading) return <Loading />

    return bids && bids.length > 0
        ? <NonEmpty bids={bids} {...otherProps} />
        : <Empty />;
}