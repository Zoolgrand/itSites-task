import React, { useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage';

function App() {

// const getDatas= async ()=>{
//   const response = await fetch('https://my-json-server.typicode.com/Zoolgrand/fake-db/knives')
//   const data = await response.json()
//   console.log(data)
//   return data
// }

// useEffect(()=>{
//   getDatas()
// },[])

  return (
    <div className="App">
     <MainPage/>
    </div>
  );
}

export default App;
