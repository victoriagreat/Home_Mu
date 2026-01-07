import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function BecomeAgent() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    ninNumber: '',
    yearsExperience: '',
  });

  const [files, setFiles] = useState({
    idProof: null,
    certificate: null,
  });

  const [errors, setErrors] = useState({});

  // Validation rules
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 11 digits';
    }

    if (!formData.ninNumber) {
      newErrors.ninNumber = 'NIN number is required';
    } else if (!/^\d{11}$/.test(formData.ninNumber)) {
      newErrors.ninNumber = 'NIN must be exactly 11 digits';
    }

    if (!formData.yearsExperience) {
      newErrors.yearsExperience = 'Years of experience is required';
    } else if (parseInt(formData.yearsExperience) < 0) {
      newErrors.yearsExperience = 'Experience cannot be negative';
    }

    if (!files.idProof) newErrors.idProof = 'ID proof upload is required';
    if (!files.certificate) newErrors.certificate = 'Certificate upload is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleFileChange = (e) => {
    const { name, files: uploadedFiles } = e.target;
    setFiles({ ...files, [name]: uploadedFiles[0] });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  // Create base64 URLs for file previews
  const idProofUrl = files.idProof ? URL.createObjectURL(files.idProof) : '';
  const certificateUrl = files.certificate ? URL.createObjectURL(files.certificate) : '';

  // Create full application object
  const application = {
    id: Date.now(), // Unique ID
    userEmail: user.email,
    fullName: formData.fullName,
    phone: formData.phone,
    ninNumber: formData.ninNumber,
    yearsExperience: formData.yearsExperience,
    idProof: idProofUrl,
    certificate: certificateUrl,
    submittedAt: new Date().toLocaleString(),
    status: 'pending',
  };

  // Save to localStorage (shared list for admin)
  const pendingApplications = JSON.parse(localStorage.getItem('pendingAgentApplications') || '[]');
  pendingApplications.push(application);
  localStorage.setItem('pendingAgentApplications', JSON.stringify(pendingApplications));

  // Update current user's status
  updateUser({ agentStatus: 'pending' });

  alert('Agent application submitted successfully! Admin will review shortly.');
  navigate('/');
};

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-card p-12 max-w-md">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Login Required
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Please log in to apply as an agent.
          </p>
          <Link to="/login" className="btn-primary py-4 px-8 inline-block">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  // Already approved
  if (user.agentStatus === 'approved') {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-card p-12 max-w-md">
          <h1 className="text-5xl font-bold text-green-600 mb-6">🎉 Approved!</h1>
          <p className="text-2xl text-text-primary mb-8">
            You are a verified HomeMu agent
          </p>
          <Link to="/list-property" className="btn-primary py-4 px-8">
            Start Listing Properties
          </Link>
        </div>
      </div>
    );
  }

  // Pending review
  if (user.agentStatus === 'pending') {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-card p-12 max-w-md">
          <h1 className="text-4xl font-bold text-yellow-600 mb-6">⏳ Pending Review</h1>
          <p className="text-xl text-text-muted">
            Your agent application is under review. We'll notify you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-6">
          Become a Verified Agent
        </h1>
        <p className="text-lg md:text-xl text-text-muted text-center mb-12">
          Join our professional agent network — only verified agents can list properties
        </p>

        <div className="bg-white rounded-2xl shadow-card p-6 md:p-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div>
              <label className="block text-lg font-semibold text-text-primary mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-lg font-semibold text-text-primary mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 08012345678"
                className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* NIN Number */}
            <div>
              <label className="block text-lg font-semibold text-text-primary mb-2">
                NIN Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ninNumber"
                value={formData.ninNumber}
                onChange={handleChange}
                placeholder="Your 11-digit NIN"
                className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.ninNumber && <p className="text-red-600 text-sm mt-1">{errors.ninNumber}</p>}
            </div>

            {/* Years of Experience */}
            <div>
              <label className="block text-lg font-semibold text-text-primary mb-2">
                Years of Experience <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="yearsExperience"
                value={formData.yearsExperience}
                onChange={handleChange}
                min="0"
                placeholder="e.g. 5"
                className="w-full px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.yearsExperience && <p className="text-red-600 text-sm mt-1">{errors.yearsExperience}</p>}
            </div>

            {/* ID Proof Upload */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-text-primary mb-2">
                Upload ID Proof (NIN Slip or Government ID) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="idProof"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full px-6 py-4 border border-border-light rounded-lg file:btn-primary file:text-white file:px-6 file:py-3 file:rounded file:mr-4 file:border-0"
              />
              {files.idProof && <p className="text-sm text-green-600 mt-2">✓ {files.idProof.name}</p>}
              {errors.idProof && <p className="text-red-600 text-sm mt-1">{errors.idProof}</p>}
            </div>

            {/* Certificate Upload */}
            <div className="md:col-span-2">
              <label className="block text-lg font-semibold text-text-primary mb-2">
                Upload Professional Certificate/License <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="certificate"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="w-full px-6 py-4 border border-border-light rounded-lg file:btn-primary file:text-white file:px-6 file:py-3 file:rounded file:mr-4 file:border-0"
              />
              {files.certificate && <p className="text-sm text-green-600 mt-2">✓ {files.certificate.name}</p>}
              {errors.certificate && <p className="text-red-600 text-sm mt-1">{errors.certificate}</p>}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full btn-primary py-5 text-xl font-bold hover:opacity-90 transition"
              >
                Submit Agent Application
              </button>
            </div>
          </form>

          <p className="text-center text-text-muted mt-8 text-sm">
            Your information and documents will be securely reviewed by our admin team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BecomeAgent;