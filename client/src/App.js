import './App.scss';
import Web from './pages/Web';
import { BrowserRouter , Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Web />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
