import React from 'react';

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Chip}  from '@material-ui/core/'

  export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Chip color="primary"
          onClick={handleClickOpen}
          label= 'Выполнено'  />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Подтверждение"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Вы действительно хотите перенести задачу в выполненое и отправить на проверку администратору?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
