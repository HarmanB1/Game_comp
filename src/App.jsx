import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/*Main Pages */}
            <Route index element />
            <Route path="Battle" />
            <Route path="LeaderBoard" />
            <Route path="About" />

            {/*Hidden Search */}
            <Route path="Search" />

            {/*Unintended Link */}
            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
