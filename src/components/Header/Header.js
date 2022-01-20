import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header =()=>{
    const navigate = useNavigate()

    return <header className='wrap'>
        <h1 onClick={()=>{navigate('/')}}>Main</h1>
        <h1 onClick={()=>{navigate('/favorites')}}>Favorite</h1>
        <h1 >Compare</h1>
        <h1 onClick={()=>{navigate('/cart')}}>Cart</h1>
    </header>
}
export default Header