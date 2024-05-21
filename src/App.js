import logo from './logo.svg';
import './App.css';
import Home from './Mainblock/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Allroute from './Routes/Allroute';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      <Layout />
      {/* </header> */}
    </div>
  );
}

export default App;
