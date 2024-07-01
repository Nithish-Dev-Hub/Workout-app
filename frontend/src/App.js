import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import User from "./pages/User";
import Admin from "./pages/Admin";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/user" 
              element={<User />} 
            />
            <Route 
              path="/admin" 
              element={<Admin />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
