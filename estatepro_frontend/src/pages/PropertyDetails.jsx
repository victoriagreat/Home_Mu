import { useParams, Link } from 'react-router-dom';
import properties from '../data/DummyProperties.json';

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-bg-soft flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-text-primary mb-4">Property Not Found</h1>
          <Link to="/" className="text-primary text-lg hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-soft">
      {/* Hero Image */}
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-96 md:h-screen object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-40" />
        <div className="absolute top-4 left-4">
          <Link to="/" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
            ← Back
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-card p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    {property.type}
                  </span>
                  <h1 className="text-4xl font-bold text-text-primary mt-4">
                    {property.title}
                  </h1>
                  <p className="text-xl text-text-muted mt-2">{property.location}</p>
                </div>
                <p className="text-4xl font-bold text-primary">
                  {property.price}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-8 border-y border-border-light">
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-primary">{property.beds || '-'}</p>
                  <p className="text-text-muted">Bedrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-primary">{property.baths || '-'}</p>
                  <p className="text-text-muted">Bathrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-text-primary">{property.sqft}</p>
                  <p className="text-text-muted">sqft</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Description</h2>
                <p className="text-text-muted leading-relaxed">
                  Premium property in a prime location. Fully furnished with modern amenities, spacious rooms, and excellent natural lighting. Perfect for families or professionals seeking luxury living in Nigeria.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Swimming Pool', 'Gym', '24/7 Security', 'Parking', 'Garden', 'Balcony', 'Air Conditioning', 'Wi-Fi'].map(amenity => (
                    <div key={amenity} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">✓</div>
                      <span className="text-text-muted">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full" /> {/* Placeholder avatar */}
                <div>
                  <p className="font-semibold text-text-primary text-lg">Chinedu Okonkwo</p>
                  <p className="text-text-muted">Senior Property Agent</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full btn-primary py-4 text-lg">
                  Schedule Viewing
                </button>
                <button className="w-full border-2 border-primary text-primary font-bold py-4 rounded-xl hover:bg-primary hover:text-white transition text-lg">
                  Send Message
                </button>
                <button className="w-full border border-border-light text-text-primary py-4 rounded-xl hover:bg-bg-soft transition text-lg">
                  Call Agent: +234 803 000 0000
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;