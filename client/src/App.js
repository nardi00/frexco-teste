import Navbar from './Components/Navbar/Navbar'
import All from './Components/Produtos/All'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './Components/Carrinho/Cart'
import { useState, useEffect } from 'react'


function App() {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getProducts = () => {
      fetch("/api")
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
    }
  
    getProducts()
  }, [])

  const addToCart = (id, name) => {
    const newProduct = {
      id: id,
      name: name,
    }
    
    if (cart.some(e => e.name === newProduct.name)) {
      alert("O produto já existe no carrinho!")
    } else {
      const newProducts = [...cart, newProduct]
      setCart(newProducts)
      console.log(newProducts)
    }
  }

  const deleteFromCart = (id) => {
    const newProducts = cart.filter((product) => product.id !== id)
    setCart(newProducts)
    console.log(newProducts)
  }

  const deleteAll = () => {
    setCart([])
  }
  

  return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<All data={data} handleAddToCart={addToCart} />} />
            <Route path="/carrinho" element={<Cart cart={cart } handleDeleteFromCart={deleteFromCart} handleDeleteAll={deleteAll} />}  />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
