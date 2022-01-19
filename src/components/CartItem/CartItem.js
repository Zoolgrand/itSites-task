import './CartItem.css';
const CartItem = ({id, imageSrc, title, price}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img
          className="cart-image"
          src={imageSrc}
          alt="knife"
        ></img>
        <h3>{title}</h3>
      </div>
      <div className="cart-item-right">
        <h3 className="cart-price">{price} $</h3>
        <button>remove</button>
      </div>
    </div>
  );
};
export default CartItem;
