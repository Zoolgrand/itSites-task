import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
  const [kniwes, setKniwes] = useState([]);

  const getDatas = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/Zoolgrand/fake-db/knives'
    );
    const data = await response.json();
    setKniwes(data);
    return data;
  };

  useEffect(() => {
    getDatas();
  }, []);

  console.log(kniwes);

  return (
      <div className='item-list-wrap'>
    <section className="item-list">
      {kniwes.map((item) => (
        <Item
          id={item.id}
          title={item.title}
          price={item.price}
          bladeLength={item.bladeLength}
          material={item.material}
          imageSrc={item.imageSrc}
        />
      ))}
    </section>
    </div>
  );
};
export default ItemList;
