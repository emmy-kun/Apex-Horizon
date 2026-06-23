import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Property from "./pages/Property";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/properties" element={<Property />} />
      </Routes>
    </Router>
  );
}