import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Image from "./Components/Image/Image";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/show/:id" element={<Image/>}/>
      </Routes>
    </Router>
  );
}

export default App;
