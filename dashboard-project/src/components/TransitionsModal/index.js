import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Fab, Input } from '@material-ui/core';
import plusIcon from '../../design/assets/plusIcon.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <img src={plusIcon} width={30} height={30}/>
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.description}</p>
            <Input onChange={(event) => props.setTitle(event.target.value)} placeholder="Título"/>
            <Input onChange={(event) => props.setValues(event.target.value)} placeholder="Valores (e.x.: 4, 3, 7)"/>
            <Button variant="contained" color="primary">
              <p>Salvar</p>
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}