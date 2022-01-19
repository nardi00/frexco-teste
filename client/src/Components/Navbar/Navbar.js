import React from 'react'
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { lightGreen } from '@mui/material/colors/'
import styled from 'styled-components'
import fruits from './fruits.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 80px;
`

const Wrapper = styled.div`
    padding: 10px 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div``
const Right = styled.div``

function Navbar() {
    return(
        <Container>
            <Wrapper>

                <Left>
                    <Link to="/" >
                        <button style={{
                            border: "none",
                            padding: "0",
                            cursor: "pointer",
                            outline: "inherit",
                            backgroundColor: "white",
                        }}>
                            <img src={fruits} alt="Logo" width="80px" height="80px"/>
                        </button>
                    </Link>
                </Left>

                <Right>
                    <Link to="/carrinho">
                        <IconButton aria-label="cart">
                            <ShoppingCartOutlinedIcon fontSize="large" sx={{ color: lightGreen[700] }}/>
                        </IconButton>
                    </Link>
                </Right>
                
            </Wrapper>
        </Container>
    )
}

export default Navbar