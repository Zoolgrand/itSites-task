import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
  const [kniwes, setKniwes] = useState([]);
  const [filterMaterial, setFilterMaterial] = useState('');
  const [filterLength, setFilterlength] = useState('');

  const getDatas = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/Zoolgrand/fake-db/knives'
    );
    const data = await response.json();
    setKniwes(data);
    return data;
  };

  const filtredArr = [];

  if (filterMaterial || filterLength) {
    if (filterMaterial && filterLength) {
      filtredArr.length = 0;
      for (let i = 0; i < kniwes.length; i++) {
        if (
          kniwes[i].material == filterMaterial &&
          kniwes[i].bladeLength == filterLength
        ) {
          filtredArr.push(kniwes[i]);
        }
      }
    } else if (filterMaterial) {
      filtredArr.length = 0;
      for (let i = 0; i < kniwes.length; i++) {
        if (kniwes[i].material == filterMaterial) {
          filtredArr.push(kniwes[i]);
        }
      }
    } else if (filterLength) {
      filtredArr.length = 0;
      for (let i = 0; i < kniwes.length; i++) {
        if (kniwes[i].bladeLength == filterLength) {
          filtredArr.push(kniwes[i]);
        }
      }
    }
  }

  let isFilterEnabled = filtredArr.length === 0 ? false : true;

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="item-list-wrap">
      <div className="filter">
        <select
          placeholder="material"
          onChange={(e) => setFilterMaterial(e.target.value)}
        >
          <option defaultValue="" value="">
            Material
          </option>
          <option value="iron">Iron</option>
          <option value="Wood">Wood</option>
        </select>
        <select
          placeholder="material"
          onChange={(e) => setFilterlength(e.target.value)}
        >
          <option defaultValue="" value="">
            Blade Length
          </option>
          <option value="15"> 15sm</option>
          <option value="10"> 10sm</option>
        </select>
      </div>
      <section className="item-list">
        {!isFilterEnabled
          ? kniwes.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                bladeLength={item.bladeLength}
                material={item.material}
                imageSrc={item.imageSrc}
              />
            ))
          : filtredArr.map((item) => (
              <Item
                key={item.id}
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
