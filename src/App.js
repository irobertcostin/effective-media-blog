import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar";



function App() {
  return (
    <div className="App fredoka-font   overflow-hidden">



      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
