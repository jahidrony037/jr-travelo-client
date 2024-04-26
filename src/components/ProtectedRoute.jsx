import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoute;
