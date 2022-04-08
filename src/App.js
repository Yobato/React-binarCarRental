// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CarDetail from './pages/CarDetail';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='Search/:id' element = {<CarDetail/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
