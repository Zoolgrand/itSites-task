import React, { useState } from 'react';
import './Item.css';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/slices/cartSlice';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/slices/favoriteSlice';
import { addCompareItem } from '../../store/slices/compareSlice';

const Item = React.memo(
  ({ id, title, price, bladeLength, material, imageSrc }) => {
    const [isTargeted, setIsTargeted] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

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

    const addToFavoriteHandler = () => {
      setIsFavorite(true);
      dispatch(
        addToFavorite({
          id: id,
          title: title,
          price: price,
          bladeLength: bladeLength,
          material: material,
          imageSrc: imageSrc,
        })
      );
    };
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
      setIsFavorite(false);
    };
    const compareClickHandler = () => {
      dispatch(
        addCompareItem({
          id: id,
          title: title,
          price: price,
          bladeLength: bladeLength,
          material: material,
          imageSrc: imageSrc,
        })
      );
    };

    return (
      <div
        className="item-wrap"
        onMouseEnter={() => setIsTargeted(true)}
        onMouseLeave={() => setIsTargeted(false)}
      >
        <div>
          <img className="item" src={imageSrc} alt="kniwe"></img>
        </div>
        <div className="item-info">
          <div className="info-displayed-always">
            <h2>{title}</h2>
            <h3>{price} $</h3>
          </div>
          <div className={isTargeted ? 'info-displayed-hover' : 'hide'}>
            <h3> blade {bladeLength} sm</h3>
            <h3>{material}</h3>
          </div>
          <button onClick={buyClickHandler}>Buy</button>
          {!isFavorite ? (
            <button onClick={addToFavoriteHandler}>Favorite</button>
          ) : (
            <button onClick={removeItemFromFavorite}>Undo</button>
          )}
          <button onClick={compareClickHandler}>Compare</button>
        </div>
      </div>
    );
  }
);
export default Item;
