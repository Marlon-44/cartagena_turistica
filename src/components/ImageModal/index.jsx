import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from "./index.module.css"

const style = {
    position: 'absolute',
    top: '20%',
    left: '20%',
    transform: 'translate(-10%, -15%)',
    outline: 'none',
    border: '2px solid #fff',
    boxShadow: 24,
};

export default function ImageModal({ photo, open, onClose }) {


    return (

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}

            className={styles.modal}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <img className={styles.modal__photo} src={photo} alt="" />
                </Box>
            </Fade>
        </Modal>

    );
}
