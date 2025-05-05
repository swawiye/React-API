import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <>
    <HomePage/>
    <List/>
    </>
  )
}

export default App
