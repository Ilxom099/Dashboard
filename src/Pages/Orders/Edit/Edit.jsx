import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {FiEdit} from "react-icons/fi";
import {TiDeleteOutline} from "react-icons/ti";
import {AvField, AvForm} from "availity-reactstrap-validation";


import {useDispatch} from "react-redux";
import Categor from "../../Creat/Categor";
import imag from "../../Creat/imag.png";
import {Bod,EditImage,EdText,EdLabel,AddFoto,EdName,Category,EdButs,Exit,ModalDiv,ImgLab} from './EditStyled'
import {EditProduct} from "../../../Store/Redux/Delete,Edit Redux";
import {useState} from "react";
import {Img, ImgLabel, Textarea} from "../../Creat/CreatStyled";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,

    bgcolor: 'background.paper',
    boxShadow: 24,
   borderRadius:2,
    p: 4,
};




export default function TransitionsModal({editor}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [img,setImg] = useState(null);

    const [load,setLoad] = useState(false);
    const dispatch = useDispatch()

    function editSave(event,values) {
       dispatch(EditProduct({...values,id:editor.id,imageId: img ? img : editor.imageId}))
        setOpen(false)
    }


    function handleImage(e) {
        setLoad(true)
        const onload = e.target.files[0];
        const formData = new FormData();
        formData.append("image", onload)
        axios({
            url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
            method:"POST",
            data:formData,

        }).then((res)=>{
            setImg(res.data);
            setLoad(false)

        })

    }


    return (
        <ModalDiv>
            <button onClick={handleOpen} className={'ordEdit '}> <FiEdit /> </button>
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
                        <AvForm   model={editor ? editor : {}} id={'form'} onValidSubmit={editSave}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <Exit onClick={handleClose}> <TiDeleteOutline/></Exit>

                         <Bod>
                             <EdName>
                                 <EdLabel>Name</EdLabel>

                                     <AvField name="productName"     className={'Edform'} required />

                                 <EdLabel>Price</EdLabel>

                                     <AvField name="price"    className={'Edform'} required />

                                 <EdLabel>Amount</EdLabel>

                                     <AvField name="amount"     className={'Edform'} required />

                                 <EdLabel>Description</EdLabel>

                                  <AvField name={"description"} className={"Edform"} required/>
                                 <EdLabel>Category</EdLabel>
                                 <Category>
                                     <Categor />
                                 </Category>
                                 <EditImage >
                                     <EdText>

                                         <div className={'des'}> Add Image </div>

                                         {
                                             img ?  <i className="bi bi-x-lg float-end"  onClick={()=>setImg(null)}> </i> : ''
                                         }

                                         <ImgLab htmlFor={"imgDown"}>


                                             {
                                                 img ? <Img   src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`}
                                                         width={150} height={150} />  :
                                                     <div>
                                                         {
                                                             load ?   <div className="lds-ripple editLoad">
                                                                 <div> </div>
                                                                 <div> </div>
                                                             </div> :    <div> <img src={imag} alt="no foto" className={'imag'} />
                                                                 <span>Drop or Select file</span>
                                                             </div>
                                                         }
                                                     </div>
                                             }

                                         </ImgLab>

                                     </EdText> <input type="file" onChange={handleImage} className={'file d-none'} id={"imgDown"}/>
                                 </EditImage>
                             </EdName>

                         </Bod>

                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <EdButs form={'form'} onClick={handleClose}>
                                Create Product
                            </EdButs>
                        </Typography>
                        </AvForm>
                    </Box>

                </Fade>
            </Modal>
        </ModalDiv>
    );
}
