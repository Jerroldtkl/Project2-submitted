import React from "react";
import Data from "./landmark/Data";
import Design from "./style/designLayout/Design";
import Navbar from "./style/navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Design />
        {/* <BrowserRouter> */}
         <Data />
        {/* </BrowserRouter> */}
      </div>
    </React.Fragment>
  );
}

export default App;
