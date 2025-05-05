import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import List from './pages/List';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </Router>
  )
}

export default App
