import './CSS/Main.css';
import {Routes , Route} from 'react-router-dom';
import OrderH from "./Pages/OrderH";



function Main(){
    return(
    <>
    <Routes>
      <Route exact path = '/pastorders' element={<OrderH/>}></Route>
    </Routes>
    </>
    );
}

export default Main;