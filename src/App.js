import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function App() {
  const state=useSelector(state=>state.ui.cartIsVisiable);
  const cart=useSelector(state=>state.cart);

  useEffect(()=>{
    fetch('https://react-post-6d088-default-rtdb.firebaseio.com/cart.json',{
      method:'PUT',
      body:JSON.stringify(cart),
    })
  },[cart])
  return (
    <Layout>
      { state  &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
