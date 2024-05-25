import logo from './logo.svg';
import './App.css';
import Home from './Mainblock/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allroute from './Routes/Allroute';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
