import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import './product.css'

const Container = styled.div`
    padding: 50px 130px;
    margin-bottom: 30px;
`

const All = ({data, handleAddToCart}) => {
    return(
        <Container>
            <h1>Todos os produtos</h1>
            <div className='product-list'>
                {data.map((product) => (
                    <Product 
                        id={product.id}
                        name={product.name}
                        nutritions={product.nutritions}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </Container>
    )
}

export default All 