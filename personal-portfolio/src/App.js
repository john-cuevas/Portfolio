import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/projects' element = {<Projects/>}></Route>
          <Route path='/project/:id' element = {<ProjectDisplay/>}></Route>
          <Route path='/experience' element = {<Experience/>}></Route>
          <Route path='/contact' element = {<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
