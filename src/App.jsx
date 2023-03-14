import React, {useState, useEffect} from "react";
import Mainpage from "./components/mainpage/Mainpage"
import Navbar from "./components/navbar/Navbar";
import Loading from "./components/Loading";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2 second loading time
  }, []);

  if (isLoading) {
    return <Loading />; // show the loading component while Home component is still loading
  }
  return (
    <div> 
      <Navbar /> 
      <Mainpage />
    </div>
  );
}

export default App;