import React from 'react';
import {userApi}  from './../../core/api/index';

import { makeStyles,
 Button,
 Avatar,
 List,
 ListItem,
 ListItemAvatar,
 ListItemText,
 DialogTitle,
 Dialog,
} from '@material-ui/core';

import { blue } from '@material-ui/core/colors';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  button:{
    fontSize: '1.6vw',
    padding: 0,
    margin: 0,
  },
});

const SimpleDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = id => {
    console.log(id)
    userApi.getOnlyOneUser(id)
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Список участников</DialogTitle>
      <List>
        {props.taskAssigneeList.map(list => (
          <ListItem button onClick={() => handleListItemClick(list)} key={list}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={list} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}



const AssigneModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(props.list);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button color="primary" className={classes.button}  onClick={handleClickOpen}>
         все учасники 
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        taskAssigneeList={props.taskAssigneeList}
        />
    </>
  );
}
export default AssigneModal
