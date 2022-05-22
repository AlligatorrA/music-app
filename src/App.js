import './App.css';
import './styles/universal.css'
import './styles/necessary.css'
import Home from './components/Home/Home';
import Topnav from './components/Navbar/topnav/Topnav';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Navbar/footnav/Footer';


function App() {
  return (
    <div className="App">
      <Topnav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
