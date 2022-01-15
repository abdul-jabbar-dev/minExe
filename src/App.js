import './App.css';
import Footer from './Page/Shared/Footer';
import Navigation from './Page/Shared/Navigation';
import CstomerSatisfaction from './Components/Home/CstomerSatisfaction';


function App() {
  return (
    <div className="App">
      {/* NavBar   */}
      <Navigation></Navigation>
      
     <CstomerSatisfaction></CstomerSatisfaction>



      {/* footer  */}
      <Footer></Footer>
    </div>
  );
}

export default App;
