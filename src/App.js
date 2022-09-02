import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import TvShows from './components/TvShows';
import Homepage from "./components/Hompage";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <BrowserRouter>
      

        <MyNavbar />
       
        <Routes>
          <Route path='/' exact element={<Homepage movieGenre="hobbit" title="Hobbit" />} />
          <Route path="/TvShows" element={<TvShows movieGenre="harry potter" title="Harry Potter" />} />
        </Routes>
     
        <MyFooter />
       
    </BrowserRouter>
  );
}

export default App;
