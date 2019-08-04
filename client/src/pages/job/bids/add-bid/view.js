import React, { useState } from 'react';

import Opened from './opened';
import Closed from './closed';

export default props => {
    const [isOpened, setOpened] = useState(false);

    const handleOpen = () => setOpened(true);
    const handleClose = () => setOpened(false);

    return isOpened
        ? <Opened onClose={handleClose} {...props} />
        : <Closed onOpen={handleOpen} />;
}