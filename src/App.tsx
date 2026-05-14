import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Intro from './pages/Intro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
