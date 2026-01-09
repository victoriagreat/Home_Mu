function About() {
  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-8">
          About HomeMu
        </h1>
        <p className="text-xl text-text-muted text-center mb-12">
          Nigeria's premium platform for real estate and hospitality
        </p>

        <div className="bg-white rounded-xl shadow-card p-12">
          <p className="text-lg text-text-muted leading-relaxed mb-6">
            HomeMu was founded with a simple mission: to make finding and listing properties in Nigeria seamless, trustworthy, and beautiful.
          </p>
          <p className="text-lg text-text-muted leading-relaxed mb-6">
            We connect buyers, renters, landlords, and agents with premium listings across Lagos, Abuja, Port Harcourt, and beyond.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Whether you're looking to buy your dream home, rent a comfortable apartment, lease commercial space, or book a luxury shortlet — HomeMu is your trusted partner.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;