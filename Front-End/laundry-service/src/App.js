import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import {Routes , Route} from 'react-router-dom';
import Registerpage from './pages/Registerpage';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path = '/' element={<Homepage/>}></Route>
      <Route exact path = '/register' element={<Registerpage/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
