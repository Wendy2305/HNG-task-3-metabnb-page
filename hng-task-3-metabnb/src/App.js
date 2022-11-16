
import './App.css';
import Hero from './components/hero';
import NftPage from './components/NftPage'
import Metabnb from './components/metabnb'
import Footer from './components/footer'
import TokensPage from './components/TokensPage';
// import HomePage from './components/homepage';

import './styles/footer.css'
import './styles/homepage.css'


function App() {
  return (
    <div className="App">
        <Hero/>
        <TokensPage/>
        <NftPage/>
        <Metabnb/>
        <Footer/>
    </div>
  );
}

export default App;
