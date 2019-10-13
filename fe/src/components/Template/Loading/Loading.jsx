import React from 'react'
import loadimg from '../../../assets/loading.gif'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100px ',
    position: 'absolute',
    top: '45%',
    left:' 50%',
  },
  img: {
    width: '100%',
  },
}));
const Loading = (props) => {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <img className={classes.img} src={loadimg}  alt="load" />
      </div>
    )
}

export default Loading
