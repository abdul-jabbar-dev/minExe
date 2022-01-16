import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer';
import Navigation from './Page/Shared/Navigation';
import SkillDetails from './Page/Skills/SkillDetails/SkillDetails';
import Skills from './Page/Skills/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/SkillDetails" element={<SkillDetails />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
