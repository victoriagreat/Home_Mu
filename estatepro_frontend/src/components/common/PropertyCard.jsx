import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {property.type}
        </span>
        <span className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-lg text-sm font-semibold">
          {property.price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2">
          {property.title}
        </h3>
        <p className="text-text-muted mb-4">{property.location}</p>
        <div className="flex gap-6 text-sm text-text-muted">
          {property.beds && <span>{property.beds} Beds</span>}
          {property.baths && <span>{property.baths} Baths</span>}
          <span>{property.sqft} sqft</span>
        </div>
        <Link
          to={`/property/${property.id}`}
          className="block mt-6 text-primary font-semibold hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;