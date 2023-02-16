import React from "react";
import Mainpage from "./components/mainpage/Mainpage"
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="app"> 
      <Navbar /> 
      <Mainpage />
    </div>
  );
}

export default App;