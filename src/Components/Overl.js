import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import classes from './Overl.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const posthandler = (event) => {
    event.preventDefault();
    console.log('in post');

    handleClose();
  };

  return (
    <span>
      <button className={classes.butt} onClick={handleOpen}>
        +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.message}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
              <textarea className={classes.textarea}></textarea>
              <button className={classes.cancel} onClick={handleClose}>
                Cancel
              </button>
              <button
                type="submit"
                onClick={posthandler}
                className={classes.post}
              >
                Post
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </span>
  );
}
