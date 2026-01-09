import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/DummyProperties.json';

function Lease() {
  const leaseProperties = properties.filter(p => p.type === 'For Lease');

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-4">
          Lease Commercial Properties
        </h1>
        <p className="text-xl text-text-muted text-center mb-12">
          Premium office spaces, shops, and warehouses for lease
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-text-primary mb-6">Filters</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Location</label>
                  <select className="w-full px-4 py-3 border border-border-light rounded-lg">
                    <option>All Locations</option>
                    <option>Victoria Island</option>
                    <option>Ikeja</option>
                    <option>Abuja CBD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Space Size (sqft)</label>
                  <input type="text" placeholder="Min" className="w-full px-4 py-3 border border-border-light rounded-lg mb-2" />
                  <input type="text" placeholder="Max" className="w-full px-4 py-3 border border-border-light rounded-lg" />
                </div>
                <button className="w-full btn-primary">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-8">
              <p className="text-text-muted">{leaseProperties.length} commercial spaces found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaseProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lease;