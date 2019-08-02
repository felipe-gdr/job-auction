import React from 'react';

import NotFollowingIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import FollowingIcon from '@material-ui/icons/RemoveRedEye';

export default ({ isFollowing = true }) => 
    isFollowing ? <FollowingIcon /> : <NotFollowingIcon />;