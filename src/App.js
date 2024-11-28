import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AppNavbar from './components/AppNavbar';
import SignUp from './sign-up/SignUp.tsx';
import SignIn from './sign-in/SignIn.tsx';
import Dashboard from './dashboard/Dashboard.tsx';
import Members from './dashboard/components/Members.tsx';

function App() {
  return (
    <Router>
      {/* <AppNavbar /> {} */}
      <Routes>
        <Route path="/" element={<SignIn />} />  {/* SignIn page */}
        <Route path="/signup" element={<SignUp />} />  {/* SignUp page */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
        <Route path="/members" element={<Members />} />  {/* Members page */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
