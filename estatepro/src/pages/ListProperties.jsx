import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ListProperty() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    type: 'For Sale',
    size: '',
    bedrooms: '',
    bathrooms: '',
    amenities: [],
  });

  const [photos, setPhotos] = useState([]); // Array of File objects
  const [photoPreviews, setPhotoPreviews] = useState([]); // Array of base64 URLs for preview

  const amenitiesOptions = [
    'Swimming Pool',
    'Gym',
    '24/7 Security',
    'Parking',
    'Garden',
    'Balcony',
    'Air Conditioning',
    'Wi-Fi',
    'Generator',
    'Borehole',
    'Furnished',
    'Serviced',
  ];

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        amenities: checked
          ? [...formData.amenities, value]
          : formData.amenities.filter((a) => a !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePhotoUpload = (e) => {
    const newFiles = Array.from(e.target.files);

    if (newFiles.length + photos.length > 20) {
      alert('Maximum 20 photos allowed');
      return;
    }

    setPhotos([...photos, ...newFiles]);

    // Generate previews
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoPreviews((prev) => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (photos.length === 0) {
      alert('Please upload at least one photo');
      return;
    }

    // Demo success
    const listing = {
      ...formData,
      photos: photoPreviews,
      agentEmail: user.email,
      submittedAt: new Date().toLocaleString(),
    };

    console.log('New Property Listed:', listing);
    alert('Property listed successfully! 🎉');
    navigate('/');
  };

  // Protect route - only approved agents
  if (!user || user.agentStatus !== 'approved') {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-card p-12 max-w-md">
          <h1 className="text-4xl font-bold text-text-primary mb-6">
            Access Denied
          </h1>
          <p className="text-xl text-text-muted">
            Only approved agents can list properties.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-8">
          List Your Property
        </h1>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    step >= num ? 'bg-primary' : 'bg-gray-300'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-32 h-1 ${step > num ? 'bg-primary' : 'bg-gray-300'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                  Basic Information
                </h2>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Property Title"
                  required
                  className="w-full px-6 py-4 border border-border-light rounded-lg focus:ring-2 focus:ring-primary"
                />

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Full description..."
                  rows="6"
                  required
                  className="w-full px-6 py-4 border border-border-light rounded-lg focus:ring-2 focus:ring-primary"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price (e.g. ₦500,000,000)"
                    required
                    className="px-6 py-4 border border-border-light rounded-lg"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location (e.g. Ikoyi, Lagos)"
                    required
                    className="px-6 py-4 border border-border-light rounded-lg"
                  />
                </div>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-border-light rounded-lg"
                >
                  <option>For Sale</option>
                  <option>For Rent</option>
                  <option>For Lease</option>
                  <option>Shortlet</option>
                  <option>Land</option>
                </select>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full btn-primary py-4 text-xl"
                >
                  Next: Details & Amenities
                </button>
              </div>
            )}

            {/* Step 2: Details & Amenities */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                  Property Details
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <input
                    type="text"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    placeholder="Size (sqm)"
                    className="px-6 py-4 border border-border-light rounded-lg"
                  />
                  <input
                    type="number"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="Bedrooms"
                    className="px-6 py-4 border border-border-light rounded-lg"
                  />
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="Bathrooms"
                    className="px-6 py-4 border border-border-light rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenitiesOptions.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          value={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onChange={handleChange}
                          className="w-5 h-5 text-primary rounded focus:ring-primary"
                        />
                        <span className="text-text-muted">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-8 py-4 border border-border-light rounded-lg hover:bg-bg-soft transition"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary py-4 px-8"
                  >
                    Next: Photos & Review
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Photos & Final Review */}
            {step === 3 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-text-primary mb-8">
                  Photos & Final Review
                </h2>

                {/* Photo Upload */}
                <div>
                  <label className="block text-xl font-semibold mb-4">
                    Upload Photos <span className="text-red-500">(Required - up to 20)</span>
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="w-full px-6 py-8 border-2 border-dashed border-border-light rounded-xl text-center cursor-pointer hover:border-primary transition bg-bg-soft"
                  />
                  <p className="text-center text-text-muted mt-3">
                    {photos.length} photo(s) selected
                  </p>
                </div>

                {/* Photo Previews */}
                {photoPreviews.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-6">
                      Photo Previews
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {photoPreviews.map((preview, index) => (
                        <div key={index} className="relative">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-48 object-cover rounded-xl shadow-md"
                          />
                          <span className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm">
                            {index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Final Review */}
                <div className="bg-bg-soft rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
                    Final Review
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-lg">
                    <p><strong>Title:</strong> {formData.title || 'Not set'}</p>
                    <p><strong>Location:</strong> {formData.location || 'Not set'}</p>
                    <p><strong>Price:</strong> {formData.price || 'Not set'}</p>
                    <p><strong>Type:</strong> {formData.type}</p>
                    <p><strong>Bedrooms:</strong> {formData.bedrooms || 'N/A'}</p>
                    <p><strong>Bathrooms:</strong> {formData.bathrooms || 'N/A'}</p>
                    <p><strong>Size:</strong> {formData.size || 'N/A'}</p>
                    <p><strong>Amenities:</strong> {formData.amenities.join(', ') || 'None'}</p>
                    <p><strong>Photos Uploaded:</strong> {photos.length}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-10">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-8 py-4 border border-border-light rounded-lg hover:bg-bg-soft transition"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="btn-primary py-4 px-10 text-xl font-bold"
                  >
                    Publish Listing
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ListProperty;