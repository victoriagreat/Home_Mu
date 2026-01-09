import { Link } from 'react-router-dom';

function Hotels() {
  const hotelListings = [
    {
      id: 1,
      name: "Lagos Marriott Hotel Ikeja",
      location: "Ikeja, Lagos",
      price: "₦350,000/night",
      image: "https://cache.marriott.com/content/dam/marriott-renditions/LOSLG/loslg-exterior-9338-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
    },
    {
      id: 2,
      name: "The Delborough Lagos",
      location: "Victoria Island, Lagos",
      price: "₦600,000/night",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/2b/9d/30/9d/caption.jpg",
    },
    {
      id: 3,
      name: "Four Points by Sheraton Lagos",
      location: "Victoria Island, Lagos",
      price: "₦280,000/night",
      image: "https://cache.marriott.com/content/dam/marriott-digital/fp/emea/hws/l/losfp/en_us/photo/unlimited/assets/fp-losfp-day-exterior-10726.jpg",
    },
    {
      id: 4,
      name: "The Lilygate Lagos",
      location: "Lekki, Lagos",
      price: "₦320,000/night",
      image: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/120833/photos/64278959_XL/The-Lilygate-Lobby.jpg?tr=w-780%2Ch-437%2Cfo-auto",
    },
    {
      id: 5,
      name: "Nordic Hotel Lagos",
      location: "Victoria Island, Lagos",
      price: "₦250,000/night",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0a/7b/1d/51/nordic-hotel.jpg",
    },
    {
      id: 6,
      name: "Radisson Blu Anchorage Hotel",
      location: "Victoria Island, Lagos",
      price: "₦380,000/night",
      image: "https://www.radissonhotels.com/dam-content/prod/media/jcr:content/renditions/original/RADBLUANCHORAGELAGOS_Exterior.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-soft">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[60vh] overflow-hidden">
        <img 
          src="https://cache.marriott.com/content/dam/marriott-renditions/LOSLG/loslg-exterior-9338-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" 
          alt="Luxury Hotels in Nigeria" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary bg-opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Premium Hotel Bookings
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover luxury hotels, resorts, and boutique stays across Nigeria and beyond
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input type="text" placeholder="Destination" className="px-4 py-3 border rounded-lg" />
                  <input type="date" className="px-4 py-3 border rounded-lg" />
                  <input type="date" className="px-4 py-3 border rounded-lg" />
                  <button className="btn-primary">Search Hotels</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hotels Listings */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Featured Hotels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelListings.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition">
                <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{hotel.name}</h3>
                  <p className="text-text-muted mb-4">{hotel.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{hotel.price}</span>
                    <button className="btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Popular Hotel Destinations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Lagos', 'Abuja', 'Port Harcourt', 'Calabar', 'Enugu', 'Kano', 'Ibadan', 'Dubai'].map((city) => (
              <div key={city} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-card overflow-hidden group-hover:shadow-card-hover transition">
                  <div className="h-48 bg-linear-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">{city}</span>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-text-primary font-semibold group-hover:text-primary transition">
                      Hotels in {city}
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
            Ready for Your Next Stay?
          </h2>
          <p className="text-xl mb-10">
            Find and book the perfect hotel for business or leisure
          </p>
          <Link to="/" className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition">
            Start Booking Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Hotels;