import './App.css';
import Homepagemenu from './components/Homepagemenu';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu3 from './components/Menu3';
import Minuman1 from './components/Minuman1';
import Minuman2 from './components/Minuman2';

function App() {
  return (
    <div className='bg-darkpattern w-screen h-screen overflow-y-auto relative bg-cover'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepagemenu />} />
          <Route path='/Menu1' element={<Menu1 />} />
          <Route path='/Menu2' element={<Menu2 />} />
          <Route path='/Menu3' element={<Menu3 />} />
          <Route path='/Minuman1' element={<Minuman1 />} />
          <Route path='/Minuman2' element={<Minuman2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
