import React,{useEffect, useState} from 'react'

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { MenuOneDialogElement } from './components/index'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(.2, .5),
    margin: theme.spacing(0.5, 1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  onedialogwrapper:{
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    width: '100%',
    borderRadius: '55px',
  },
  discription: {
    padding: '2%',
    minWidth: '80%',
    maxWidth: '80%',
  },
  name:{
    margin: '0',
    padding: '1%',
    width: '100%',
  },
  lastsmessage: {
    margin: '0',
    width: '100%',
    fontSize: '12px'
  },
  unreadedwrapper:{
    margin: '0',
    padding: '0',
      maxWidth: '20px'
  },
  unreaded:{
    borderRadius: '50%',
    backgroundColor: 'rgba(250, 114, 104, .7)',
    fontSize: '14px',
    padding: '4px 7px',
  },
  menu:{
    padding: '0',
    margin: '0',
    maxWidth: '40px',
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width: 59,
    height: 59,
    marginLeft: '3%',
    marginRight: '3%',
  },

}));


const OneDialogElement = ({id, setCurrentDialogId,  partner, lastsMessage,readed, author}) =>{
  const classes = useStyles();
  let [choosenPartner ,setChoosenPartner] = useState(partner)


useEffect(()=>{
  (partner._id === window.localStorage.ulid) ?
           (setChoosenPartner (author)):
            (setChoosenPartner(partner))
      },[choosenPartner])


  return(
    <Paper className={classes.root}
            style={{textDecaration: 'none'}}
      onClick={setCurrentDialogId.bind(this, {id, choosenPartner })}
      >
    <Link to={`/messages?dialogs=${id}`}

       className={classes.onedialogwrapper}>

       <Avatar
         alt={choosenPartner.name}
         src={choosenPartner.avatar}
         className= {classes.bigAvatar} />

       <div className={classes.discription}>
         <h3 className={classes.name}>{choosenPartner.name}</h3>
         <p className={classes.lastsmessage}>{lastsMessage}</p>
       </div>



    </Link>
    <div className={classes.menu}>
      {readed ? <div></div> :
        <IconButton className={classes.unreadedwrapper}>
        <span className={classes.unreaded}> +1 </span>
       </IconButton>
      }
        <MenuOneDialogElement />
    </div>

    </Paper>
  )
}

export default  OneDialogElement
