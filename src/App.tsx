import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Intro from './pages/Intro';
import VisitorHome from './pages/VisitorHome';
import Juegos from './pages/Juegos';
import Proyectos from './pages/Proyectos';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/visitante" element={<VisitorHome />} />
          <Route path="/visitante/juegos" element={<Juegos />} />
          <Route path="/visitante/proyectos" element={<Proyectos />} />
          <Route path="/visitante/nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
