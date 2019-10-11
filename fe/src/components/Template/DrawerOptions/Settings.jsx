import React from 'react'
import {connect} from 'react-redux'
import {userActions} from './../../../redux/actions/index'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 0),
    margin: theme.spacing(1.5, 1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '30px',
    overflow: 'hidden',
    maxWidth: '82vw'

  },
avatarwrapper:{
  background: 'linear-gradient(173deg, rgba(80,182,191,1) 0%, rgba(152,221,221,1) 35%, rgba(0,212,255,1) 100%)',
  width: '101%',
  display: 'flex',
  alignItems: 'center',
  minHeight: '15vh',
  flexDirection: 'column',

},
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 200,
    height: 200,
    marginBottom: '-75px'
  },
  discription: {
    marginTop: '22%',
    padding: '2%',
    width: '90%'
  },


}));

const Settings = (props) => {
    const classes = useStyles();
const{
  email,
  name,
  avatar,
  createdAt,
  updatedAt,
} = props.user
  return (
    <Paper className={classes.root}>
      <div className={classes.avatarwrapper}>
       <Typography
         style = {{margin: '7%'}}
         gutterBottom variant="h5" component="h2">
            {name}
       </Typography>
           <Avatar
             alt={name}
             src={avatar}
             className={classes.bigAvatar}
             onClick={()=>props.fetchUserData()}/>
      </div>
      <div className={classes.discription} >2
<br />
<br />
<br />
<br />
<br />
<br />
<br />
{email}
<br />
{createdAt}
<br />
{updatedAt}
<br />
        </div>
    </Paper>
  )
}

const mapStateToProps = (state) =>{
return{
    user: state.user.data
  }
}

const mapDispachToProps = (dispatch) =>{
  return {
      fetchUserData: () => dispatch(userActions.fetchUserData())
  }
}


export default connect(mapStateToProps, mapDispachToProps)(Settings)
