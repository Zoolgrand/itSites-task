import './Cart.css';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <section className="cart">
      {cartItems.map((item) => (
        <CartItem
          id={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          price={item.price}
        />
      ))}
      <button className="confirm-button">Confirm</button>
    </section>
  );
};
export default Cart;
