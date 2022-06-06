
import './App.css';
import FAQs from './Views/FAQs';
import Header from './Views/Header';
import Product from './Views/Product';
// import RoadMap from './Views/RoadMap';
import Token from './Views/Token';
import Footer from './Views/Footer';
import AboutUs from './Views/AboutUs';
import RoadMap from './Views/RoadMap';

function App() {
  return (
    <div >
      <Header />
      <Product /> 
      <Token />
      <RoadMap />
      <FAQs />
      <AboutUs />
      <Footer />
    
    </div>
  );
}

export default App;
