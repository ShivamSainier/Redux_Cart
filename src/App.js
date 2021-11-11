import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { uiActions } from "../src/store/ui-slice"
import Notification from './components/UI/Notification';

function App() {
  const state = useSelector(state => state.ui.cartIsVisiable);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notifications)
  useEffect(() => {

    const sendData = async () => {
      dispatch(uiActions.setNotifications({
        state: 'Pending',
        title: 'Sending',
        message: 'Sending Cart Data'
      }))

      const response = fetch('https://react-post-6d088-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        dispatch(uiActions.setNotifications({
          status: "Error",
          title: "Error Found",
          message: "Error Found"
        }))
      }
      dispatch(uiActions.setNotifications({
        status: "Success",
        title: "Data Send",
        message: "Data Send Successfully !"
      }))



    }
    sendData().catch(error=>{
      dispatch(uiActions.setNotifications({
        status:'error', 
        title:"Error Found",
        message:"Error Found"
      }))
    });

  }, [cart, dispatch]);
  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {state && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
