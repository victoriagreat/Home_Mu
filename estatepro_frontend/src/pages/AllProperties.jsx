import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/DummyProperties.json';

function AllProperties() {
  return (
    <div className="min-h-screen bg-bg-soft py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-12">
          All Properties
        </h1>

        {properties.length === 0 ? (
          <p className="text-center text-2xl text-text-muted">No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProperties;