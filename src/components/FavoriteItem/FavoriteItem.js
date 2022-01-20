import './FavoriteItem.css';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from '../../store/slices/favoriteSlice';
import { addCartItem } from '../../store/slices/cartSlice';

const FavoriteItem = ({
  id,
  title,
  price,
  bladeLength,
  material,
  imageSrc,
}) => {
  const dispatch = useDispatch();

  const removeItemFromFavorite = () => {
    dispatch(
      removeFromFavorite({
        id: id,
        title: title,
        price: price,
        bladeLength: bladeLength,
        material: material,
        imageSrc: imageSrc,
      })
    );
  };
  const buyClickHandler = () => {
    dispatch(
      addCartItem({
        id: id,
        imageSrc: imageSrc,
        title: title,
        price: price,
      })
    );
  };

  return (
    <div className="item-wrap">
      <div>
        <img className="item" src={imageSrc} alt="kniwe"></img>
      </div>
      <div className="item-info">
        <div className="info-displayed-always">
          <h2>{title}</h2>
          <h3>{price} $</h3>
        </div>
        <div className="info-displayed-hover">
          <h3> blade {bladeLength} sm</h3>
          <h3>{material}</h3>
        </div>
        <button onClick={buyClickHandler}>Buy</button>
        <button onClick={removeItemFromFavorite}>Undo</button>
      </div>
    </div>
  );
};

export default FavoriteItem;
