import './ressources/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Home from './components/home';
import CV from  './components/cv'
import Projects from  './components/projects'
import Contact from  './components/contact'

function App() {
  return (
    <Router>
        <Navbar />
          <div id = "routes_container">
            <Routes>
              <Route path='/' exact element= { <Home /> } />
              <Route path='/cv' element= { <CV /> } />
              <Route path='/projects' element= { <Projects /> } />
              <Route path='/contact' element= { <Contact /> } />
            </Routes>
          </div>
    </Router>
  );
}

export default App;
