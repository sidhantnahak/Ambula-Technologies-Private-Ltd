import "./App.css";
import FetchApi from "./Components/FetchApi";

import Main from "./Components/Main";
import AllRoute from "./Page/AllRoute";
import Navbar from "./Page/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <AllRoute />
      <div className="max-w-4xl mx-auto mt-20">
        <Main />
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="text-4xl text-center m-5">API Integration  and Shopping Cart</h1>
        < FetchApi />
      </div>
    </>
  );
}

export default App;
