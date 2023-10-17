import './App.scss';
import Web from './pages/Web';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Web />}></Route> 
          <Route path="/list" element={<List />}></Route> 
          <Route path="/login" element={<Login />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
