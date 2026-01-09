import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      name,
      role: 'user', // Can add agent signup flow later
    };
    signup(user);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-bg-soft flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-card p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-text-primary text-center mb-8">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-6 py-4 border border-border-light rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-6 py-4 border border-border-light rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-6 py-4 border border-border-light rounded-lg"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-6 py-4 border border-border-light rounded-lg"
          />
          <button type="submit" className="w-full btn-primary py-4">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-6 text-text-muted">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;