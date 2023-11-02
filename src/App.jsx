import './App.css';
import Homepagemenu from './components/Homepagemenu';
import Menu1 from './components/Menu1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-darkpattern w-screen h-screen overflow-y-auto relative bg-cover'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepagemenu />} />
          <Route path='/Menu1' element={<Menu1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
