import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import FrontButtons from './Components/FrontButtons';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <div className="front">
      <FrontButtons />
      </div>
      <div className='fle'>
      <Footer />
      </div>
      {/* <Login/> */}
    </div>
  );
}

export default App;
