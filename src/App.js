import './App.css';
import Declaration from './components/Declaration';
import Header from './components/Header';
import Personal from './components/Personal';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Professional from './components/Professional';
import Hobbies from './components/Hobbies';
import Extra from './components/Extra';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='mainContent'>
        <Sidebar></Sidebar>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Personal></Personal>}></Route>
            <Route path="/professional" element={<Professional></Professional>}></Route>
            <Route path="/hobbies" element={<Hobbies></Hobbies>}></Route>
            <Route path="/extra" element={<Extra></Extra>}></Route>
          </Routes>
        </div>
      </div>
      <Declaration></Declaration>
    </div>
  );
}

export default App;
