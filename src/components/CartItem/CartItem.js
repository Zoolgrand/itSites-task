import './CartItem.css';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/slices/cartSlice';
const CartItem = ({ id, imageSrc, title, price }) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(
      removeCartItem({
        id: id,
      })
    );
  };

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img className="cart-image" src={imageSrc} alt="knife"></img>
        <h3>{title}</h3>
      </div>
      <div className="cart-item-right">
        <h3 className="cart-price">{price} $</h3>
        <button onClick={removeItemHandler}>remove</button>
      </div>
    </div>
  );
};
export default CartItem;
