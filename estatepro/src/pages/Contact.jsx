function Contact() {
  return (
    <div className="min-h-screen bg-bg-soft py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-text-primary text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-text-muted text-center mb-12">
          We're here to help you find your perfect property
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-card p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 border border-border-light rounded-lg" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 border border-border-light rounded-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 border border-border-light rounded-lg" />
              <textarea placeholder="Your Message" rows="6" className="w-full px-6 py-4 border border-border-light rounded-lg"></textarea>
              <button className="w-full btn-primary py-4">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl shadow-card p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h2>
            <div className="space-y-6 text-text-muted">
              <div>
                <p className="font-semibold text-text-primary">Email</p>
                <p>support@homemu.ng</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Phone</p>
                <p>+234 800 000 0000</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Office</p>
                <p>Victoria Island, Lagos, Nigeria</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary">Business Hours</p>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;