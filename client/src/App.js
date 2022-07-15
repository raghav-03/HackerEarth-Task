import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Image from "./Components/Image/Image";
import Edit from "./Components/Edit/Edit";
import Search from "./Components/Search/Search";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:keyword" element={<Home />} />
        <Route exact path="/show/:id" element={<Image/>}/>
        <Route exact path="/:id/edit" element={<Edit/>}/>
        <Route exact path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}

export default App;
