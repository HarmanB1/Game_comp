import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import { Battle } from "./pages/battle";
import { Home } from "./pages/home";
import { Leaderboard } from "./pages/leaderboard";
//nopag
//serach
import { Layout } from "./components/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*Main Pages */}
            <Route index element= {<Home/>} />
            <Route path="Battle" element= {<Battle/>}/>
            <Route path="LeaderBoard" element= {<Leaderboard/>}/>
            <Route path="About" element= {<About/>}/>

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
