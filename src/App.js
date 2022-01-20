import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import FavoritePage from './pages/FavoritesPage';
import ComparePage from './pages/ComparePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </div>
  );
}

export default App;
