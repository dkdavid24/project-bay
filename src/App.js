import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Detailed from "./pages/Detailed";
import Login from "./pages/Login";
import Add from "./pages/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/project/:id" element={<Detailed />}></Route>
        <Route exact path="/add" element={<Add />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
