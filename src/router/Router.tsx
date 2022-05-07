import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from '../components/sections/Resume';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;