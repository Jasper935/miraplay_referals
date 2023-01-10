import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Welcome } from './pages/Welcome/Welcome';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route index path='miraplay_referals' element={<Welcome/>} />
        {/* <Route  path='/reviews' element={<Reviews/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
