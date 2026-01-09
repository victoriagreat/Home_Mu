import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email.trim()) {
      alert('Please enter your email');
      setLoading(false);
      return;
    }

    // Create user data
    const userData = {
      email: email.trim(),
      name: email.split('@')[0],
      role: email.toLowerCase().includes('admin') ? 'admin' : 'user',
      agentStatus: email.toLowerCase().includes('agent') ? 'approved' : 'none', // For testing agent dashboard
    };

    // Save login
    login(userData);

    // Smart redirect
    if (userData.role === 'admin') {
      navigate('/admin');
    } else if (userData.agentStatus === 'approved') {
      navigate('/agent-dashboard');
    } else {
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-bg-soft flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 w-full max-w-md">
        <h1 className="text-4xl font-bold text-text-primary text-center mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-text-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. agent@homemu.com"
              required
              className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-text-primary mb-2">
              Password (Demo: Any)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter anything"
              className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-5 text-xl font-bold disabled:opacity-70"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-8 text-text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

        <div className="mt-8 p-4 bg-bg-soft rounded-lg text-sm text-text-muted">
          <p className="font-semibold mb-2">Demo Login Tips:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use any email</li>
            <li>Email with <strong>"admin"</strong> → Admin Dashboard</li>
            <li>Email with <strong>"agent"</strong> → Agent Dashboard</li>
            <li>Normal email → Homepage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;