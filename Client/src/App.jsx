import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Auth/login';
import {useAuth} from './contexts/AuthContext.jsx';




const App = () => {
  const {isAuthenticated} = useAuth();
  return (
    <Router>
        <Routes>
         
          <Route path="/" element={
            !isAuthenticated ? <Login /> : <Navigate to="/dashboard" />
            }/>
          <Route path="/dashboard" element={ 
          isAuthenticated ? <Dashboard /> : <Login /> }/>
            
        </Routes>
    </Router>
  )
}

export default App