import React,{useState ,useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {userActions} from './../../../../redux/actions/index'
import {dateConverter} from '../../../../core'
import {IButton} from '../../../Auth/components/index'

import {
  Paper,
  makeStyles,
  Avatar,
  Typography,
  Button
}   from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';

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
    display: 'flex',
    opacity: '0.9',
    fontSize: '11px',
    textAlign:'center',
    alignItems: 'center',
  },
  inputfile:{
    	width: '0.1px',
    	height: '0.1px',
    	opacity: '0',
    	overflow: 'hidden',
    	position: 'absolute',
      zIndex: '-1',
  },
  lable:{
    display:'flex',
  },
  icons:{
    color: 'rgb(80,182,191)'
  }


}));

const Settings = (props) => {
  const classes = useStyles();
  const{
    email,
    name,
    createdAt,
    hierarchy,
    lastSeen,
    fetchUserLogout,
  } = props.data
  const arr = [' ' , 'уборщик' , 'юнга', 'кэп']
  const newHierarchy = (arr[hierarchy])
  const [avatar , setAvatar] = useState(props.data.avatar)
  const inputEl = useRef(null)


  const localstorDelete = ()=>{
    delete window.localStorage.token
    delete window.localStorage.ulid
    fetchUserLogout(false)
      props.history.push('/')
  }

  const onAvatarUpload = e =>{
    e.preventDefault()
    props.userUpdateAvatar(inputEl.current.files[0])
  }
  useEffect(() => {
    setAvatar(props.data.avatar)
  },[props.data.avatar]);

  return (
    <Paper className={classes.root}>
      <div className={classes.avatarwrapper}>
        <div style={{display:'flex', flexDirection:'column' , justifyContent: 'center' }}>
        <Typography
          style = {{margin: '8% 0 3% 0', width: '100%'}}
          gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
       </div>
        <Avatar
          alt={name}
          src={`data:image/jpeg;base64,${avatar}`}
          className={classes.bigAvatar}
        />
      </div>
      <div className={classes.discription} >
        <span className={classes.changeava}>
          <input
            className={classes.inputfile}
            ref = {inputEl}
            type="file"
            name="file"
            id="file"
            multiple = {false}
            onChange={onAvatarUpload}
             />
           <Button variant="outlined" color="primary">
             <PersonIcon className={classes.icons} />
              <label htmlFor="file" className={classes.lable}>
                изменить аватар
              </label>
           </Button>
        </span>
        <br />
        <br />
        <br />
        <br />

        <br />
        {email}
        <br />
        Создан :{dateConverter(createdAt)}
        <br />
          Онлайн: {dateConverter(lastSeen)}
        <br />
        <br />
        hierarchy: {newHierarchy}
        <br />
        <IButton
           handleSubmit={localstorDelete}
           placeholder="Выйти из аккаунта"
           isValid={true}/>
      </div>
    </Paper>
  )
}


const mapDispachToProps = (dispatch) =>{
  return {
    fetchUserLogout: (bool) => dispatch(userActions.fetchUserLogout(bool)),
    userUpdateAvatar: (file) =>
      dispatch(userActions.userUpdateAvatar(file))
  }
}


export default connect(
  ({ user }) => user,
   mapDispachToProps)(Settings)
