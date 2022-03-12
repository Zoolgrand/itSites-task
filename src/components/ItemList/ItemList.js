import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {

    const [knives, setKnives] = useState([]);
    const [filterObj, setFilterObj] = useState({ material: null, bladeLength: null })

    const changeMaterialHandler = (e) => {
        setFilterObj(Object.assign({}, filterObj, { material: e.target.value }))
    }
    const changeLengthHandler = (e) => {
        setFilterObj(Object.assign({}, filterObj, { bladeLength: Number(e.target.value) }))
    }

    const getData = async () => {
        try {
            const response = await fetch(
                'https://my-json-server.typicode.com/Zoolgrand/fake-db/knives'
            );
            const data = await response.json();
            setKnives(data);
        } catch (err) {
            throw new Error('Fetching error');
        }
    };

    let itemsForRender = [...knives]

    useEffect(() => {
        getData()
    }, [])

    Object.keys(filterObj).forEach((param) => {
        if (filterObj[param]) {
            itemsForRender = itemsForRender.filter(item => item[param] === filterObj[param])
        }
    })

    return (
        <div className="item-list-wrap">
            <div className="filter">
                <select
                    placeholder="material"
                    onChange={changeMaterialHandler}
                >
                    <option defaultValue="" value="">
                        Material
                    </option>
                    <option value="iron">Iron</option>
                    <option value="Wood">Wood</option>
                </select>
                <select
                    placeholder="length"
                    onChange={changeLengthHandler}
                >
                    <option defaultValue="" value="">
                        Blade Length
                    </option>
                    <option value={15}> 15sm</option>
                    <option value={10}> 10sm</option>
                </select>
            </div>
            <section className="item-list">
                {itemsForRender.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        bladeLength={item.bladeLength}
                        material={item.material}
                        imageSrc={item.imageSrc}
                    />))}
            </section>
        </div>
    );
};
export default ItemList;
