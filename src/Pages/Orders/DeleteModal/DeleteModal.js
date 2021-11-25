import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {MdDelete} from "react-icons/md";
import {Buttons,BtnOk,Delete,DelText} from "./ModalStyled";
import {useDispatch} from "react-redux";
import {DeleteProduct, EditProduct} from '../../../Store/Redux/Delete,Edit Redux'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:2,
    p: 4,
};

export default function DelModal({editor}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()

    function delProduct() {

        dispatch(DeleteProduct(editor.id))
        handleClose(false)

    }

    return (
        <div>
            <button onClick={handleOpen} className={'ordDel'}><MdDelete/> </button>
            <Modal

                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className={'Modal'}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                             <Delete>
                             <span> <MdDelete/></span>
                             </Delete>
                                 <DelText> Do you want to delete </DelText>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Buttons>

                                <BtnOk  onClick={delProduct}>
                                   Delete
                                </BtnOk>
                            </Buttons>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
