import {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = () => {

    const [knives, setKnives] = useState([]);
    const [knivesToRender, setKnivesToRender] = useState([]);
    const [filterMaterial, setFilterMaterial] = useState('');
    const [filterLength, setFilterLength] = useState('');

    const paramsObj = {
        material: 'iron',
        bladeLength: 10
    }

    Object.keys(paramsObj).map((paramKey) => {

        const resArr = knives.filter(item => {

            return item[paramKey] === paramsObj[paramKey]
        })
        console.log(resArr)
        // setKnivesToRender(resArr)

    })

    const changeMaterialHandler = (e) => {
        setFilterMaterial(e.target.value)
    }
    const changeLengthHandler = (e) => {
        setFilterLength(e.target.value)
    }

    const getData = async () => {
        try {
            const response = await fetch(
                'https://my-json-server.typicode.com/Zoolgrand/fake-db/knives'
            );
            const data = await response.json();
            setKnives(data);
            setKnivesToRender(data);
        } catch (err) {
            throw new Error('Fetching error');
        }
    };
    const filteredArr = []
    let isFilterEnabled = filteredArr.length !== 0
    const listForRender = isFilterEnabled ? filteredArr : knives

    useEffect(() => {
        getData();
    }, []);

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
                    <option value="15"> 15sm</option>
                    <option value="10"> 10sm</option>
                </select>
            </div>
            <section className="item-list">
                {listForRender.map((item) => (
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
