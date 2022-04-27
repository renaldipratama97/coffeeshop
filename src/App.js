import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Index";
import Auth from "./views/Auth/Index";
import Product from "./views/Product";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth/*" exact element={<Auth />} />
            <Route path="/product" exact element={<Product />} />
          </>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
