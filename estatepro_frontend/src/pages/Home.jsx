import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Building,
  Store,
  BedDouble,
  Hotel,
  Map,
  Calendar,
  Shield,
  Plane,
  CreditCard,
  Clock,
  Star,
  BookOpen,
  Menu,
  X,
} from 'lucide-react';

import SearchBar from '../components/common/SearchBar';
import PropertyCard from '../components/common/PropertyCard';
import properties from '../data/DummyProperties.json';

function Home() {
  const featured = properties.slice(0, 6);

  const services = [
    { name: 'Rent Apartment', path: '/rent', icon: Building },
    { name: 'Shops for Lease', path: '/lease', icon: Store },
    { name: 'Shortlets / Airbnb', path: '/shortlets', icon: BedDouble },
    { name: 'Hotel Bookings', path: '/hotels', icon: Hotel },
    { name: 'Buy Land', path: '/land', icon: Map },
    { name: 'Event Halls Booking', path: '/event-halls', icon: Calendar },
  ];

  const quickBenefits = [
    { icon: Shield, title: 'Verified Properties', text: 'All listings are inspected & verified' },
    { icon: CreditCard, title: 'Pay Small Small', text: 'Flexible installment plans available' },
    { icon: Clock, title: '24/7 Support', text: 'We\'re here to help anytime' },
    { icon: Star, title: 'Premium Service', text: 'Best agents & customer experience' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-primary min-h-[50vh] md:min-h-screen flex flex-col justify-center md:justify-end pb-12 md:pb-24 overflow-hidden">
        {/* Solid background (no image) */}
        <div className="absolute inset-0 bg-primary" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Hero Text - Centered vertically on mobile */}
          <div className="text-center text-white mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Leisure at its<br />Peak
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              We offer Premium homes, apartments, lands & hospitality bookings
            </p>
          </div>

          {/* MOBILE SERVICE BUTTONS - Responsive 2-column grid */}
          <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.path}
                  className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 touch-manipulation"
                >
                  <Icon size={28} className="text-primary mb-2" />
                  <span className="text-sm font-medium text-text-primary leading-tight text-center">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Service Nav + Search - HIDDEN on mobile */}
          <div className="hidden md:flex relative flex-col items-center">
            {/* Service Nav */}
            <div className="relative z-30 -mb-6">
              <div className="bg-white rounded-full shadow-card inline-flex flex-wrap justify-center p-1 gap-1">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="flex items-center gap-2 px-5 md:px-7 py-3 rounded-full font-semibold text-text-primary hover:bg-bg-soft transition whitespace-nowrap"
                    >
                      <Icon size={18} className="text-primary" />
                      <span className="text-sm md:text-base">{service.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative z-20 w-full max-w-5xl -mt-2">
              <SearchBar />
            </div>
          </div>

          {/* Hamburger Menu Button - MOBILE ONLY */}
          <div className="md:hidden fixed top-4 right-4 z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-primary/90 backdrop-blur-sm p-3 rounded-full text-white shadow-lg"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </section>

      {/* ================= MOBILE HAMBURGER MENU ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md animate-fade-in">
            <div className="flex flex-col space-y-6 text-center">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center justify-center gap-3 py-4 text-xl font-medium text-text-primary hover:text-primary transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={24} />
                    {service.name}
                  </Link>
                );
              })}

              {/* Become An Agent in mobile menu */}
              <Link
                to="/become-agent"
                className="btn-primary py-5 text-xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become An Agent
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Featured Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/all-properties"
              className="text-primary text-lg font-semibold hover:underline"
            >
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
            Explore by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.path}
                  className="group bg-white rounded-xl shadow-card hover:shadow-card-hover p-10 text-center transition-all duration-300"
                >
                  <Icon
                    size={48}
                    className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.name}
                  </h3>
                  <p className="text-text-muted">
                    Browse verified listings nationwide
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= QUICK BENEFITS ================= */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {quickBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <Icon size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold text-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-muted text-sm">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= HOLIDAY ESCAPE ================= */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Get Apartment/Shops for Rent and Lease
              </h2>
              <p className="text-xl mb-8 opacity-90">At HomeMu, Your Comfort and Security comes first. We deliver seamless real estate solutions built on Trust, Quality and Legal Assurance.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BookOpen size={32} className="text-white shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      We provide well-maintained, comfortable, and conducive living spaces for leisure, rent, and long-term stays.
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookOpen size={32} className="text-white shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Whether you’re leasing or renting, we offer top-tier property options tailored to your lifestyle and budget.
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookOpen size={32} className="text-white shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Experience convenience, comfort, and legal security—all in one place. Choose HomeMu today.
                    </h3>
                  </div>
                </div>
              </div>

              <Link to="/shortlets" className="inline-block mt-10 bg-white text-primary font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition">
                Explore HomeMu Services
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/623072751.jpg" alt="Holiday villa" className="rounded-xl shadow-2xl" />
              <img src="https://images.unsplash.com/photo-1578683015141-0b11f7e5f374?w=800&q=80" alt="Beach getaway" className="rounded-xl shadow-2xl mt-12" />
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Luxury shortlet" className="rounded-xl shadow-2xl -mt-12" />
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" alt="Pool villa" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
                Hotels, Shortlets and Event Halls Booking Tips
              </h2>
              <p className="text-xl text-text-muted mb-8">
                Get quick response on the best hotels, Event Halls, shortlets available in your location.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BookOpen size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Comfortable Living Spaces – We offer quality shortlets designed to give you comfort and convenience.</h3>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BookOpen size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Hassle-Free Hotel Booking – Booking a hotel through us is fast, simple, and stress-free.</h3>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BookOpen size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">Get access to verified venues with Flexible options for weddings, conferences, parties, and corporate events</h3>
                  </div>
                </div>
              </div>
              <Link to="/hotel" className="inline-block mt-10 text-primary font-bold hover:underline text-lg">
                Read All Tips →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/623072751.jpg" alt="Holiday villa" className="rounded-xl shadow-2xl" />
              <img src="https://images.unsplash.com/photo-1578683015141-0b11f7e5f374?w=800&q=80" alt="Beach getaway" className="rounded-xl shadow-2xl mt-12" />
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" alt="Luxury shortlet" className="rounded-xl shadow-2xl -mt-12" />
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" alt="Pool villa" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAY SMALL SMALL ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Payment plan" className="rounded-xl shadow-2xl" />
                <img src="https://images.unsplash.com/photo-1554224177-974c8b8e4d9c?w=800&q=80" alt="Flexible payment" className="rounded-xl shadow-2xl mt-12" />
                <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80" alt="Installment" className="rounded-xl shadow-2xl -mt-12" />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Easy payment" className="rounded-xl shadow-2xl" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-6">
                Pay Small Small own a Land Today!
              </h2>
              <p className="text-xl text-text-muted mb-8">
                We offer genuine plots at discounted prices, making land ownership easier and more affordable for everyone.
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <CreditCard size={24} className="text-primary" />
                  <span>Exclusive discount rates you won’t find elsewhere</span>
                </li>
                <li className="flex items-center gap-3">
                  <CreditCard size={24} className="text-primary" />
                  <span>Flexible payment options to suit your budget</span>
                </li>
                <li className="flex items-center gap-3">
                  <CreditCard size={24} className="text-primary" />
                  <span>Verified and secure land documentation</span>
                </li>
              </ul>
              <Link to="/land" className="inline-block mt-10 btn-primary py-4 px-10">
                View Payment Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;