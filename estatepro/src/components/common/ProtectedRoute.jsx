import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children, requireAgent = false }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAgent && user.agentStatus !== 'approved') {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;