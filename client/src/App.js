import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from './views/Dashboard'
import Auth from "./views/Auth";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth authRoute="login" />} />
            <Route path="/register" element={<Auth authRoute="register" />} />
            <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />

          </Route>

            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
          </Routes>
        </Router>
      </PostContextProvider>
     
    </AuthContextProvider>
  );
}

export default App;
