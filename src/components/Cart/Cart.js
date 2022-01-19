import './Cart.css';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  // const cartItems = useSelector(state =>state.cart)
  const dummy = [
    {
      id: 1,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife1',
      price: 132,
    },
    {
      id: 2,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife2',
      price: 1132,
    },
    {
      id: 3,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife3',
      price: 1325,
    },
    {
      id: 4,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife4',
      price: 1342,
    },
  ];

  return (
      <section className="cart">
        {dummy.map((item) => (
          <CartItem
            id={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
          />
        ))}
        <button className='confirm-button'>Confirm</button>
      </section> 
  );
};
export default Cart;
