import { useState } from 'react'
import './Item.css'

const Item =({id, title, price, bladeLength, material, imageSrc}) => {

    const [isTargeted, setIsTargeted] = useState(false)


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
             <button>Buy</button>
        </div>
       

    </div>
}
export default Item