
import './App.css';
import Create from './Components1/Create';
import Update from './Components1/Update';
import Read from './Components1/Read';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="main">
      <h2>CURD OPERTION</h2>
      <BrowserRouter>
      <Routes>
        <Route exact path="/Create" element={<Create />}/>
        <Route exact path="/Update" element={<Update />}/>
        <Route exact path="/Read" element={<Read />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
