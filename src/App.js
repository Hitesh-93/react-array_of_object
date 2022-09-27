// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cricket from './Components/Cricket';
import Services from './Components/Services';
import About from './Components/About'
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' element={<Cricket />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes  >
      </Router>

    </>
  );
}

export default App;
