import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import { useState } from 'react';
import './Favorites.css';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.favorite);

  return (
    <section className="favorites">
      {favoriteItems.map((item) => (
        <FavoriteItem
          id={item.id}
          imageSrc={item.imageSrc}
          title={item.title}
          bladeLength={item.bladeLength}
          material={item.material}
          price={item.price}
        />
      ))}
    </section>
  );
};
export default Favorites;
