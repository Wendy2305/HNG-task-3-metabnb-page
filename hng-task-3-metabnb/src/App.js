
import './App.css';
import Hero from './components/hero';
import NftPage from './components/NftPage'
import Metabnb from './components/metabnb'
import Footer from './components/footer'
import TokensPage from './components/TokensPage';
// import HomePage from './components/homepage';

import './styles/footer.css'
import './styles/homepage.css'
import Navibarr from './components/Navbar';


function App() {
  return (
    <div className="App">
        <Navibarr/>
        <Hero/>
        <TokensPage/>
        <NftPage/>
        <Metabnb/>
        <Footer/>
    </div>
  );
}

export default App;
