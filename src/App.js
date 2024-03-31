// import {useState} from "react";

// import Todo from "./components/Todo.js";
// import CoinTracker from "./components/CoinTracker.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    // <div>
    //   {/* <Todo /> */}
    //   {/* <CoinTracker /> */}
    //   <Home />
    // </div>

    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
