import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const CartItem = ({id, name, handleDeleteFromCart}) => {

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
        <div className='product-container-cart'>
            <p className='product-name'>{name}</p>
            <div className='product-details' >
                <TextField
                    type="number"
                    defaultValue="1"
                    id="outlined-start-adornment"
                    sx={{width: '150px' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Qtd.</InputAdornment>,
                    }}
                />
                {/* <input type="text" pattern="[0-99]*" placeholder='1'/> */}
                <IconButton onClick={() => {
                    handleDeleteFromCart(id)
                    handleClick()
                    }} >
                    <DeleteIcon color="error"/>
                </IconButton>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Item excluído do carrinho!
                    </MuiAlert>
                </Snackbar>
            </div>
            
        </div>
    )
}

export default CartItem