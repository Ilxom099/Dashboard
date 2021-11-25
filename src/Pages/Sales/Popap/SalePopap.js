import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {BsCheckCircleFill} from "react-icons/bs";
import {TiDelete} from "react-icons/ti";
import { ProductSale } from '../../../Store/Redux/SaleProduct'
import {BtnOk,Delete,Buttons,DelText} from './PopapStyled'
import {useDispatch, useSelector} from "react-redux";
import postsell from "../../../Store/Redux/SaleProduct";

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

export default function SaleModal({Card}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()
    let load = useSelector(state => state.postsell.load)


    function SaleModal() {
        let load = true
        console.log('loader worked')
         dispatch(ProductSale(Card))
    }

    return (
        <div>
            <button onClick={SaleModal} className={'check'}>Checkout </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                              <span>  <BsCheckCircleFill className={'icons'}/> </span>
                            </Delete>
                            <DelText> Product sold </DelText>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Buttons>
                                <BtnOk onClick={handleClose}>
                                  Close
                                </BtnOk>
                            </Buttons>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
