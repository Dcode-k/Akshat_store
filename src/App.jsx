import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
