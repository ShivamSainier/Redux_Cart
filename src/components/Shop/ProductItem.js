import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from "react-redux"
import { cartActions } from '../../store/cart-slice';
import { useSelector } from 'react-redux'

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const addCartHendler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;
    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    console.log(existingItem)
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }

    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
    };

    dispatch(cartActions.replaceCart(newCart));
  };


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHendler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
