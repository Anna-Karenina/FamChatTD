import React from 'react'
import {connect} from 'react-redux'
import {userActions} from './../../../../redux/actions/index'

import {IButton} from '../../../Auth/components/index'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import  ruLocale  from 'date-fns/locale/ru'

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
  changeava:{
    opacity: '0.4',
    fontSize: '8px',
    marginLeft: '3%',
    padding: '3%',
    textAlign:'center',
  }


}));

const Settings = (props) => {
  console.log(props)
  const classes = useStyles();
  const{
    email,
    name,
    avatar,
    createdAt,
    updatedAt,
    hierarchy,
  } = props.data
let arr =[' ' , 'уборщик' , 'юнга', 'кэп']
const newHierarchy = (arr[hierarchy])

const generateNormaldate = isoDate =>{
let date = parseISO(isoDate)
return  format(new Date(date), 'dd MMMM yyyy в HH:m',{ locale: ruLocale})

}



  const handleSubmit = ()=>{
    delete window.localStorage.token
    delete window.localStorage.ulid
    props.history.push('/')

  }

  return (
    <Paper className={classes.root}>
      <div className={classes.avatarwrapper}>
        <div style={{display:'flex', flexDirection:'column' , justifyContent: 'center' }}>
        <Typography
          style = {{margin: '8% 0 3% 0', width: '100%'}}
          gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <span className={classes.changeava}> ищменить аваа</span>
       </div>
        <Avatar
          alt={name}
          src={avatar}
          className={classes.bigAvatar}/>
      </div>
      <div className={classes.discription} >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {email}
        <br />
        Создан :{generateNormaldate(createdAt)}
        <br />
          Онлайн: {generateNormaldate(updatedAt)}
        <br />
        <br />
        hierarchy: {newHierarchy}
        <br />
        <IButton
           handleSubmit={handleSubmit}
           placeholder="Выйти из аккаунта"
           isValid={true}/>
      </div>
    </Paper>
  )
}


const mapDispachToProps = (dispatch) =>{
  return {
    fetchUserData: () => dispatch(userActions.fetchUserData(null))
  }
}


export default connect(
  ({ user }) => user,
   mapDispachToProps)(Settings)
