// import logo from './logo.svg';
// import './App.css';
import HomePage from './my-comp/HomePage';
import NavBar from './my-comp/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import DoreamonSong from './my-comp/firstpage';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
