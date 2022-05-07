import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Project from '../pages/Projects';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;