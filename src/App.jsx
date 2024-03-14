import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Technology from "./pages/Technology.jsx";
import Health from "./pages/Health.jsx";
import Entertainment from "./pages/Entertainment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/health" element={<Health />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
}

export default App;
