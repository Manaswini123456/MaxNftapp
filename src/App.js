import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace"; 
import Collection from "./pages/Collection";
import Community from "./pages/Community";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Protected from "./Components/Protected";
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/marketplace" element={<Protected Component={Marketplace}/>}></Route>
        <Route path="/collection" element={<Protected Component={Collection}/>}></Route>
        <Route path="/community" element={<Community/>}></Route> 
        <Route path="/create" element={<Protected Component={Create}/>}></Route> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
