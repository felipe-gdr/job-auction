import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import Divider from '@material-ui/core/Divider';

import useStyles from './styles';

export default ({ onOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.addBid}>
      <Tooltip title="Bid!" >
        <Fab color="primary" aria-label="add" className={classes.noBidButton} onClick={onOpen}>
          <MoneyIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}