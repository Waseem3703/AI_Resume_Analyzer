import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Result from "./components/Result";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
