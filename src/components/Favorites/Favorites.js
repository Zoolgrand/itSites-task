import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import './Favorites.css';

const Favorites = () => {
  // const favoriteItems = useSelector(state =>state.favorite)
  const dummy = [
    {
      id: 1,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife1',
      bladeLength: 12,
      material: 'wood',
      price: 132,
    },
    {
      id: 2,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife2',
      bladeLength: 14,
      material: 'wood',
      price: 1322,
    },
    {
      id: 3,
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pIBFRL17bLGX0a4WrpGBORm5uovOGeuH6Q&usqp=CAU',
      title: 'knife3',
      bladeLength: 5,
      material: 'iron',
      price: 13232,
    },
  ];

  return (
    <section className='favorites'>
      {dummy.map((item) => (
        <Item
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
