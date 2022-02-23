import {useSelector} from 'react-redux';
import './Favorites.css';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const Favorites = () => {
    const favoriteItems = useSelector((state) => state.favorite);
    console.log(favoriteItems)
    return (
        <section className="favorites">
            {favoriteItems.map((item) => (
                <FavoriteItem
                    key={item.id}
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
