import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';
import {useDispatch} from "react-redux"

const CartItem = (props) => {
  const {id, title, quantity, total, price } = props.item;
  const dispatch=useDispatch()

  const removeItemHendler=()=>{
    console.log("Remove Item from cart")
    dispatch(cartActions.removeItemsFromCart(id))
  }
  const addItemHendler=()=>{
    dispatch(cartActions.addItemsToCart({
      id,title,price
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          Price : {total.toFixed(2)}{' '}
          <span className={classes.itemprice}>({price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          Quantity : <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addItemHendler}>+</button>
          <button onClick={removeItemHendler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
