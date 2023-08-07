import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './Pages/Main';
import Currencies from './Pages/Currencies';
import Price from './Pages/Price';
import Nav from './Components/Nav';
import './index.css';

function App() {
  return (
    <div className="App">

        <Nav />

        <Routes>

          <Route path='/' element={ <Main /> } />
          <Route path='/currencies' element={ <Currencies /> } />
          {/* adding the :name we make this dynamic and allow it to call on different parameters */}
          <Route path='/price/:symbol' element={ <Price /> } />
          <Route path='*' element={ <Navigate to='/'/>} />

        </Routes>
    </div>
  );
}

export default App;
