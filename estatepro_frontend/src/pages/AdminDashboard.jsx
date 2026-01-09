import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-xl shadow-card p-12 max-w-md">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Access Denied
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Only admins can access this page.
          </p>
          <Link to="/" className="btn-primary py-4 px-8">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  // Correct key: pendingAgentApplications (matches BecomeAgent.jsx)
  const pendingApplications = JSON.parse(localStorage.getItem('pendingAgentApplications') || '[]');

  const approveAgent = (applicationId) => {
    // Remove from pending and mark user as approved (demo)
    const updatedApplications = pendingApplications.filter(app => app.id !== applicationId);
    localStorage.setItem('pendingAgentApplications', JSON.stringify(updatedApplications));

    alert(`Agent application ${applicationId} approved!`);
    window.location.reload(); // Refresh to update list
  };

  const rejectAgent = (applicationId) => {
    const updatedApplications = pendingApplications.filter(app => app.id !== applicationId);
    localStorage.setItem('pendingAgentApplications', JSON.stringify(updatedApplications));

    alert(`Agent application ${applicationId} rejected.`);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-12">
          Admin Dashboard - Agent Reviews
        </h1>

        {pendingApplications.length === 0 ? (
          <div className="text-center bg-white rounded-2xl shadow-card p-16">
            <p className="text-3xl text-text-muted">
              No pending agent applications
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {pendingApplications.map((agent) => (
              <div key={agent.id} className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Applicant: {agent.fullName}
                </h2>
                <p className="text-sm text-text-muted mb-6">
                  Submitted: {agent.submittedAt}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <p><strong>Email:</strong> {agent.userEmail}</p>
                  <p><strong>Phone:</strong> {agent.phone}</p>
                  <p><strong>NIN:</strong> {agent.ninNumber}</p>
                  <p><strong>Experience:</strong> {agent.yearsExperience} years</p>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">Uploaded Documents</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="font-semibold text-lg mb-3">ID Proof (NIN Slip / ID Card)</p>
                      {agent.idProof ? (
                        <img 
                          src={agent.idProof} 
                          alt="ID Proof" 
                          className="w-full rounded-xl border-2 border-border-light shadow-md"
                        />
                      ) : (
                        <p className="text-text-muted">No file uploaded</p>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-3">Professional Certificate / License</p>
                      {agent.certificate ? (
                        <img 
                          src={agent.certificate} 
                          alt="Certificate" 
                          className="w-full rounded-xl border-2 border-border-light shadow-md"
                        />
                      ) : (
                        <p className="text-text-muted">No file uploaded</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <button 
                    onClick={() => approveAgent(agent.id)} 
                    className="flex-1 btn-primary py-4 text-xl font-bold"
                  >
                    Approve Agent
                  </button>
                  <button 
                    onClick={() => rejectAgent(agent.id)} 
                    className="flex-1 bg-red-600 text-white font-bold py-4 text-xl rounded-xl hover:bg-red-700 transition"
                  >
                    Reject Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;