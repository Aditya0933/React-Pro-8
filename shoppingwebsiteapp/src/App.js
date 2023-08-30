import NavBar from './components/NavBar';
import './App.css';
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from './page/Home'
import Cart from './page/Cart'

function App() {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
