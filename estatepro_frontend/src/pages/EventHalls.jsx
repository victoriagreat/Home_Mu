import { Link } from 'react-router-dom';

function EventHalls() {
  const hallListings = [
    {
      id: 1,
      name: "Ikoyi Main Event, Lagos",
      location: "Ikoyi, Lagos",
      capacity: "3,000 guests",
      price: "From ₦12,000,000",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    },
    {
      id: 2,
      name: "Landmark Event Centre",
      location: "Oniru, Lagos",
      capacity: "3,000 guests",
      price: "From ₦12,000,000",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    },
    {
      id: 3,
      name: "International Conference Centre",
      location: "Abuja",
      capacity: "4,000 guests",
      price: "From ₦10,000,000",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      id: 4,
      name: "Civic Centre Lagos",
      location: "Victoria Island, Lagos",
      capacity: "2,500 guests",
      price: "From ₦8,000,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    },
    {
      id: 5,
      name: "The Dome",
      location: "Ikeja, Lagos",
      capacity: "10,000 guests",
      price: "From ₦20,000,000",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    },
    {
      id: 6,
      name: "Oriental Hotel Event Hall",
      location: "Lekki, Lagos",
      capacity: "1,500 guests",
      price: "From ₦6,000,000",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-soft">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-1a428e4b67e6?w=1600&q=80" 
          alt="Event Hall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Event Halls Booking
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Book the perfect venue for weddings, conferences, parties, and corporate events
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input type="text" placeholder="Location" className="px-4 py-3 border rounded-lg" />
                  <input type="date" className="px-4 py-3 border rounded-lg" />
                  <select className="px-4 py-3 border rounded-lg">
                    <option>Event Type</option>
                    <option>Wedding</option>
                    <option>Conference</option>
                    <option>Party</option>
                    <option>Corporate</option>
                  </select>
                  <button className="btn-primary">Find Venues</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Hall Listings */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Featured Event Halls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hallListings.map((hall) => (
              <div key={hall.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition">
                <img src={hall.image} alt={hall.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{hall.name}</h3>
                  <p className="text-text-muted mb-4">{hall.location}</p>
                  <p className="text-lg text-text-primary mb-2">Capacity: {hall.capacity}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{hall.price}</span>
                    <button className="btn-primary">Book Venue</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Popular Cities for Events
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Enugu', 'Calabar', 'Benin City', 'Kano'].map((city) => (
              <div key={city} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-card overflow-hidden group-hover:shadow-card-hover transition">
                  <div className="h-48 bg-linear-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{city}</span>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-text-primary font-semibold group-hover:text-primary transition">
                      Venues in {city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Planning an Event?
          </h2>
          <p className="text-xl mb-10">
            Let us help you find the perfect venue
          </p>
          <Link to="/" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition">
            Start Your Search
          </Link>
        </div>
      </section>
    </div>
  );
}

export default EventHalls;