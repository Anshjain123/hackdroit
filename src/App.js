import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import FrontButtons from './Components/FrontButtons';
import Footer from './Components/Footer';
<<<<<<< HEAD
import EventPage from './Components/EventPage';
=======
>>>>>>> 98ca8f552c27d611ebfac4d0014f3604a70df923
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousal />
      <div className="front">
        <FrontButtons />
      </div>
      <div className='fle'>
        <Footer />
      </div>
      {/* <Login/> */}
      {/* <EventPage/> */}
      {/* <Search/> */}
    </div>
  );
}

export default App;
