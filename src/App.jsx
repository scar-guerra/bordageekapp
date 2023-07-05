import Navbar from './Components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer saludo={'Bienvenid@ a Bordageek'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
