import {
  BrowserRouter,
  matchPath,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/home/Index";
import { SignUp } from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthContext";
import { ToastContainer } from "react-toastify";
import ContactDetails from "./components/contacts/ContactDetails";
import UserDashboard from "./components/common/Dashboard";
import ContactsList from "./components/common/ContactsList";
// import ProfilePage from "./components/common/UserProfile";

//export const BASE_URL = "http://localhost:5000";
export const BASE_URL = "https://contact-app-be-t5jz.onrender.com";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}

function MainLayout() {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  // const hideNavbarRoutes = ['/dashboard', '/dashboard/:id'];
  // const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  const hideNavbar =
    location.pathname === "/dashboard" ||
    location.pathname === "/dashboard/contacts" ||
    matchPath("/dashboard/:id", location.pathname) !== null;

  return (
    <div>
      {/* {showNavbar && <Navbar />} */}
      {!hideNavbar && <Navbar />}
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/dashboard/contacts"
          element={
            <ProtectedRoute>
              <ContactsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <ProtectedRoute>
              <ContactDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
