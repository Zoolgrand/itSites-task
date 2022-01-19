import { useState } from 'react'
import './Item.css'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../store/slices/cartSlice'

const Item =({id, title, price, bladeLength, material, imageSrc}) => {

    const [isTargeted, setIsTargeted] = useState(false)
    const dispatch =useDispatch()

    const ClickHandler =()=>{
        dispatch(addCartItem({
            id:id,
            imageSrc:imageSrc,
            title:title,
            price:price
        }))

    }

    return <div className='item-wrap'onMouseEnter={()=>setIsTargeted(true)} onMouseLeave={()=>setIsTargeted(false)} >
        <div>
            <img className='item' src={imageSrc} alt='kniwe' ></img>
        </div>
        <div className='item-info'>
            <div className='info-displayed-always'>
                <h2>{title}</h2>
                <h3>{price} $</h3>
            </div>
            <div className={isTargeted?'info-displayed-hover':'hide'}>
                <h3> blade {bladeLength} sm</h3>
                <h3>{material}</h3>
            </div>
             <button onClick={ClickHandler}>Buy</button>
        </div>
       

    </div>
}
export default Item