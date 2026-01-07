import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function AgentDashboard() {
  const { user } = useAuth();

  if (!user || user.agentStatus !== 'approved') {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-xl shadow-card p-12 max-w-md">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Access Denied
          </h1>
          <p className="text-xl text-text-muted">
            Only approved agents can access this dashboard.
          </p>
        </div>
      </div>
    );
  }

  const agentName = user.name || user.email.split('@')[0];

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Write-Up Section */}
        <div className="bg-white rounded-2xl shadow-card p-10 md:p-16 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">
            Welcome back, {agentName}!
          </h1>
          <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed">
            You're a verified HomeMu agent — trusted by thousands of buyers, renters, and investors across Nigeria. 
            Manage your listings, track leads, and grow your real estate business with our premium tools.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-lg">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-text-muted">Active Listings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-text-muted">Monthly Visitors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-text-muted">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <h2 className="text-4xl font-bold text-text-primary text-center mb-12">
          Agent Tools
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* List New Property */}
          <Link
            to="/list-property"
            className="bg-white rounded-2xl shadow-card hover:shadow-card-hover p-12 text-center transition-all duration-300"
          >
            <div className="text-7xl mb-6">🏠</div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              List New Property
            </h3>
            <p className="text-text-muted text-lg">
              Add apartments, lands, shortlets, or commercial spaces to reach thousands of buyers
            </p>
          </Link>

          {/* My Listings */}
          <div className="bg-white rounded-2xl shadow-card p-12 text-center opacity-80">
            <div className="text-7xl mb-6">📋</div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              My Listings
            </h3>
            <p className="text-text-muted text-lg">
              View, edit, and track performance of your active properties (coming soon)
            </p>
          </div>

          {/* Leads & Analytics */}
          <div className="bg-white rounded-2xl shadow-card p-12 text-center opacity-80">
            <div className="text-7xl mb-6">📊</div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Leads & Analytics
            </h3>
            <p className="text-text-muted text-lg">
              See inquiries, views, and insights to close deals faster (coming soon)
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center">
          <p className="text-xl text-text-muted mb-6">
            Need help or have premium properties to list?
          </p>
          <a 
            href="mailto:agents@homemu.com" 
            className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary-dark transition text-lg"
          >
            Contact Agent Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default AgentDashboard;