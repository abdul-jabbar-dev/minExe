import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './Page/Dashboard/Courses/Courses';
import Currency from './Page/Dashboard/Currency/Currency';
import Dashboard from './Page/Dashboard/Dashboard';
import DashboardHome from './Page/Dashboard/DashboardHome/DashboardHome';
import TeachersProfile from './Page/Dashboard/TeachersProfile/TeachersProfile';
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
          <Route index path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/SkillDetails" element={<SkillDetails />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<DashboardHome />}></Route>
            <Route path='/dashboard/teachers' element={<TeachersProfile />}></Route>
            <Route path='/dashboard/courses' element={<Courses />}></Route>
            <Route path='/dashboard/currency' element={<Currency />}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
