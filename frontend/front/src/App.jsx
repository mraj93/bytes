import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Layouts/Header";
import Home from "./components/Pages/Home";
import "./CSS/index.css";

const App = () => {
  return (
      <Router>
          <Header />
          
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
          </Routes>
      </Router>
  );
};

export default App;