import React from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { lightGreen } from '@mui/material/colors/'
import { useState } from "react";
import Modal from '@mui/material/Modal';
import './product.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Product = ({id, name, nutritions, handleAddToCart}) => {

    //modal
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)
    //snackbar
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return(

        <div className="product-container">
            <p>{name}</p>            
            <div>
                <IconButton onClick={handleOpenModal}>
                    <AddOutlinedIcon color="primary"/>
                </IconButton>

                <IconButton onClick={() => {
                    handleClick();
                    handleAddToCart(id, name);
                    }} >
                    <AddShoppingCartOutlinedIcon sx={{ color: lightGreen[700] }}/>
                </IconButton>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <div className="modal-container">
                    <div className="modal-header">
                        <h1>{name}</h1>
                        <IconButton onClick={() => handleAddToCart(id, name)}>
                            <AddShoppingCartOutlinedIcon sx={{ color: lightGreen[700] }}/>
                        </IconButton>
                    </div>

                    <p>Calorias: {nutritions.calories}</p>
                    <p>Carbohidratos: {nutritions.carbohydrates}</p>
                    <p>Gordura: {nutritions.fat}</p>
                    <p>Proteína: {nutritions.protein}</p>
                    <p>Açucar: {nutritions.sugar}</p>
                                      
                </div>
            </Modal>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Item adicionado ao carrinho!
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Product