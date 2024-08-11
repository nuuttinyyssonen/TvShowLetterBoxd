import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
