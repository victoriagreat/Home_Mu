import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">HomeMu</h3>
            <p className="text-gray-300">
              Nigeria's premium platform for buying, renting, leasing, and shortlet bookings.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/buy" className="hover:text-white transition">Buy Property</Link></li>
              <li><Link to="/rent" className="hover:text-white transition">Rent</Link></li>
              <li><Link to="/lease" className="hover:text-white transition">Lease</Link></li>
              <li><Link to="/shortlets" className="hover:text-white transition">Shortlets</Link></li>
              <li><Link to="/hotels" className="hover:text-white transition">Hotels</Link></li>
              <li><Link to="/land" className="hover:text-white transition">Land</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">support@HomeMu.ng<br />+234 800 000 0000</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-800 text-center text-gray-400">
          © 2026 HomeMu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;