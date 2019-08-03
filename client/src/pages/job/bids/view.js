import React from 'react';

import NonEmpty from './non-empty';
import Empty from './empty';

export default props =>
    props.bids && props.bids.length > 0
        ? <NonEmpty {...props} />
        : <Empty />;