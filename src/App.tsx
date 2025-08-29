import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import type { RootState } from "./store";

import Login from "./pages/Login";
import HomePage from "./pages/HomePage";


// Guards
interface GuardProps {
  children: React.ReactNode;
  isAuth: boolean;
}

function PrivateRoute({ children, isAuth }: GuardProps) {
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

function PublicRoute({ children, isAuth }: GuardProps) {
  return !isAuth ? <>{children}</> : <Navigate to="/dashboard" />;
}

export default function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isAuth}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to={isAuth ? "/" : "/login"} />}
        />
      </Routes>
      <ToastContainer position="bottom-left"/>
    </Router>
  );
}
