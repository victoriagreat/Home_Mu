import { Link } from 'react-router-dom';
import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/DummyProperties.json';

function Rent() {
  const rentProperties = properties.filter(p => p.type === 'For Rent');

  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-4">
          Rent Properties in Nigeria
        </h1>
        <p className="text-xl text-text-muted text-center mb-12">
          Comfortable apartments and houses available for rent — short or long term
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Same Filters Sidebar as Buy page */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-text-primary mb-6">Filters</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Location</label>
                  <select className="w-full px-4 py-3 border border-border-light rounded-lg">
                    <option>All Locations</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Furnished</label>
                  <select className="w-full px-4 py-3 border border-border-light rounded-lg">
                    <option>Any</option>
                    <option>Furnished</option>
                    <option>Unfurnished</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Price Range (per year)</label>
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
            <div className="flex justify-between items-center mb-8">
              <p className="text-text-muted">{rentProperties.length} properties found</p>
              <select className="px-4 py-2 border border-border-light rounded-lg">
                <option>Sort by: Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;