
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurant from './components/Restaurant';
import Restcard from './components/Restcard';
import RestView from './components/RestView';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="App">

<Header></Header>

<Routes>

<Route path='/' element={<Restaurant></Restaurant>}></Route>
<Route path='/view-restuarant/id' element={<RestView/>}></Route>

</Routes>





      <Footer></Footer>
      
    </div>
  );
}

export default App;
