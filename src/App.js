// import logo from './logo.svg';
// import './App.css';
import HomePage from './my-comp/HomePage';
import Playlist from './my-comp/Playlist';
import NavBar from './my-comp/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import DoreamonSong from './my-comp/firstpage';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/playlist' element={<Playlist/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
