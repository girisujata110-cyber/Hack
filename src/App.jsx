// import React, { useSyncExternalStore } from 'react'
// import Vite from './components/Vite'
// import Asher from './components/Asher'
// import Cup from './components/Cup'
// import Other from './components/Other'
// import Lines from './components/Lines'
// import Users from './components/Users'
// import Hey from './components/Hey'









// const App = () => {
//   return (
//     <div className='text-blue-600'>
// <Cup/>
// <Hey/>
// <Other/>
// <Lines/>
// <Users/>



//     </div>

//   )
// }

// export default App



import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './components/HomePage';
import Other from './components/Other';
import Navbar from './components/Navbar';
import Lines from './components/Lines';
import Asher from './components/Asher';
import Vite from './components/Vite';
import Footer from './components/Footer';
import Layout from './components/Layout';
import About from './components/About';


Navbar
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<Layout/>} >
        <Route index element={<HomePage />} />
        <Route path="about" element={<Other />} />
        <Route path="test" element={<Asher />} />
        <Route path="Placements" element={<Vite />} />
        <Route path="Corporate" element={<Lines />} />
        </Route>

      </Routes>
   </BrowserRouter>
      
    </div>
  )
}

export default App
