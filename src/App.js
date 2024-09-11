import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/index.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
