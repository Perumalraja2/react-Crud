import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Createblog from "./components/Createblog";
import Manageblog from "./components/Manageblog";
import Editblog from "./components/Editblog";
import Home from "./components/Home"
import Test from "./components/Test";
function App() {
  return <>
 
  <BrowserRouter>
<div>
<NavBar/>
</div>
<div className="container-fluid">
<Routes>
<Route path="/create" element={<Createblog/>}/>
<Route path="/manageblog" element={<Manageblog/>}/>
<Route path="/edit/:id" element={<Editblog/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/test" element={<Test/>}/>

</Routes>
</div>

</BrowserRouter>
  </>
}

export default App;
