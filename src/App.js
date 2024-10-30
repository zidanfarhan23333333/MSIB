import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FetchData from "./components/Pertemuan20/FetchData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchData />} />
      </Routes>
    </Router>
  );
}

export default App;
