
import './App.css';


import {BrowserRouter, Routes, Route,} from "react-router-dom";
// import HomePage from './components/homepage';

import './styles/footer.css'
import './styles/homepage.css'

import HomePage from './components/homepage';
import Navibarr from './components/Navbar';
import Place from './components/Place';
import Footer from './components/footer';
import NftPage from './components/NftPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navibarr/>
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/place" element={<Place/>}/>
        <Route exact path="/nfts" element={<NftPage/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;
