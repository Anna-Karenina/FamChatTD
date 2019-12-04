import React,{useState, useEffect} from 'react';
import { connect } from "react-redux";
import socket from "./../../../core/socket"
import { useFileHandlers } from "./../../../core/index"
import { messagesActions, filesActions } from './../../../redux/actions/index'

import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: '4px',
  },
  textField: {
    width: '100%',
    margin: '0',
    padding: '0',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  helper: {
    fontSize: '20px',
    color: 'red'
  },
  circle:{
    background: '#008a7c',
    borderRadius: '50%',
    color: '#fff',
    position: 'relative',
    minWidth: "28px",
    minHeight: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1%',
  },
  redcircle:{
    background: 'rgb(250, 114, 104)',
  },
  ico:{
    maxWidth:'18px',
    minWidth:'18px',
    maxHeight:'18px',
    minHeight:'18px',
    zIndex: '2',
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
    marginLeft: '1%',
  },
  thumbnailcontainer:{
    display: 'flex',
    alignItems: 'center',
    margin: '0 2% 1%',
    backgroundColor: 'rgba(255,255,255,.5)',
    flexWrap: 'wrap'
  },
  thumbnailcaption: {
    flexGrow: '1',
    fontSize: '14px',
    color: '#2b8fba' ,
    marginBottom: '5px',
    padding: '0 12px',
  },
  thumbnail :{
    flexBasis: '100px',
    height: '100%',
    maxWidth: '12vw',
    minWidth: '12vw',
    maxHeight: '12vw',
    minHeight: '12vw',
    objectFit: 'cover',
    padding: '0 3%',
    borderRadius: '20%',
  },
  thumbnailwrapper :{
    display: 'flex',
    alignItems: 'center',
    margin: '1vw 0'
  },
  MuiInputLabel:{
  bordered: {
    border: '10px solid red'
  }},
}));

const FileInput = (props) => (
  <input
    type="file"
    accept="image/*"
    name="img-loader-input"
    id="img-loader-input"
    encType="multipart/form-data"
    multiple
    {...props}
  />
)

const OutMessageInput = ({fetchSendMessage, dialogs: { currentDialogId }, user }) => {
  const {
  files,
  pending,
  next,
  uploading,
  uploaded,
  status,
  onSubmit,
  onChange,
} = useFileHandlers()
 const classes = useStyles();
 const [value, setValue] = useState("");

console.log(currentDialogId)
const handleSendMessage = e => {
socket.emit('DIALOGS:TYPING', { dialogId: currentDialogId, user });
   if (e.keyCode === 13) {
     sendMessage(e);
   }
 };

const sendMessage = async (e) => {
//     if(status === 'LOADED' ){
//       socket.removeListener("SERVER:FILE_UPLOADED")
//        onSubmit(e);

//        socket.on("SERVER:FILE_UPLOADED",
//       fetchSendMessage(value, currentDialogId, files))
//        setValue("");
//     } else {

//       e.preventDefault()
//       fetchSendMessage(value, currentDialogId);
//       setValue("");
//     }
// }
    if(status === 'LOADED' ){

      socket.removeListener("SERVER:FILE_UPLOADED")
      await onSubmit(e);
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(status === 'FILES_UPLOADED'), 3000)
      });
      await promise;
      await fetchSendMessage(value, currentDialogId, files);
      setValue("");
    } else {

      e.preventDefault()
      fetchSendMessage(value, currentDialogId);
      setValue("");
    }
}
  return (
    <>
    { (status === 'LOADED' ||  status === 'PENDING' || status === 'INIT' ) &&
      <div className={classes.thumbnailcontainer} >
        {files.map(({ file, src, id }, index) => (
          <div
            style={{ opacity: uploaded[id] ? 0.2 : 1,}}
            key={`thumb${index}`}
            className={classes.thumbnailwrapper}
            >
            <img className={classes.thumbnail} src={src} alt="" />
          </div>
        ))}
      </div>
    }
    <form className={classes.container} noValidate autoComplete='off'>
       <TextField
        id="outlined-textarea"
        label="Ввидите сообщение"
        placeholder="Ввидите сообщение"
        multiline
        className={classes.textField}
        margin="normal"
        variant="outlined"
        autoFocus = {false}
        onChange={e => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        value={value}
        InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <span type='submit'
                className={classes.circle}
                onClick={ sendMessage } >
                <SendIcon className={classes.ico} />
              </span>
            </InputAdornment>
          )
        }}
      />


      <FileInput
        onChange={onChange}
        name="img-loader-input"
        id="img-loader-input"
        className={classes.inputfile} />
      <label
        htmlFor="img-loader-input" className={classes.lable}>
        {status === 'LOADED' ?
          <span
            className={classes.circle
             + ' ' +
             classes.redcircle }>
             <AddAPhotoIcon
               onClick={onSubmit}
               className={classes.ico}/>
          </span>
        :
        <span  className={classes.circle}>
        <PhotoCameraIcon className={classes.ico}/>
        </span>
      }
      </label>


    <span className={classes.circle}>
      <MicIcon className={classes.ico} />
    </span>
    </form>
</>
  );
}
export default connect(
  ({ dialogs, user}) => ({dialogs, user: user.data}),
  {...messagesActions, ...filesActions}
)(OutMessageInput);
