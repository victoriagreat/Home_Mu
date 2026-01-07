import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/DummyProperties.json';

function Shortlets() {
  const shortletProperties = properties.filter(p => p.type === 'Shortlet');

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-4">
          Shortlet Bookings
        </h1>
        <p className="text-xl text-text-muted text-center mb-12">
          Luxury short stay apartments and villas — perfect for vacations and business trips
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-text-primary mb-6">Search Availability</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Check-in / Check-out</label>
                  <input type="date" className="w-full px-4 py-3 border border-border-light rounded-lg mb-2" />
                  <input type="date" className="w-full px-4 py-3 border border-border-light rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Guests</label>
                  <select className="w-full px-4 py-3 border border-border-light rounded-lg">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3+ Guests</option>
                  </select>
                </div>
                <button className="w-full btn-primary">
                  Search Shortlets
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-text-muted">{shortletProperties.length} shortlets available</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shortletProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shortlets;