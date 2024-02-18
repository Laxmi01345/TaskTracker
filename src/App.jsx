
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './home';
import Todo from './todopage';
function App() {
 
   
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Todo" element={<Todo/>} />
    
    </Routes>
    </BrowserRouter>
  );
}


export default App