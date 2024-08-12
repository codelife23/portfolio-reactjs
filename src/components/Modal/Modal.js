import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import MuiModal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 1320,
  bgcolor: 'background.paper',
  outline: 'none',
  padding: '12px',
};

export const Modal = ({ open, onClose, children, style: customStyle }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Fade in={open} timeout={300}>
        <Box sx={{ ...style, ...customStyle }}>{children}</Box>
      </Fade>
    </MuiModal>
  );
};
