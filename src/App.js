import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/index";
import Auth from "./views/Auth/Index";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth/*" exact element={<Auth />} />
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
