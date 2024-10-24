import logo from './logo.svg';
import FoodCart from "./components/Foodcart/FoodCart"
import './App.css';
import Recommendation from './components/recommendation/Recommendation';
import Footer from "./components/footer/Footer"
import Mynavbar from './components/corporate/navbar/Mynavbar';
import Adminlogin from './components/Admin/Adminlogin';
import Admin from './components/Admin/Admin';
import Routing from '../src/Routing/Routing';
const App = () => {
  return (
    <div className="App">
      <Routing/>
    </div>
  )
  
}

export default App
