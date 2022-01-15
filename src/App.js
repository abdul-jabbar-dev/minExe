import './App.css';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer';
import Navigation from './Page/Shared/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </div >
  );
}

export default App;
