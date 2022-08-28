
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import Component from './components/Component';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route
        path="/"
        element={<Component />}
      />
       <Route
        path="/add"
        element={<AddUser />}
      />
          <Route
        path="/all"
        element={<AllUsers />}
      />

      <Route
        path="/edit/:id"
        element={<EditUser />}
      />
        
      </Routes>
      
     

 </BrowserRouter>

  
  );
}

export default App;
