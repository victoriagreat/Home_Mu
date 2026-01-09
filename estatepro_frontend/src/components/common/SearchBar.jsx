function SearchBar() {
  return (
    <div className="bg-white rounded-xl shadow-card p-6 md:p-8">
      <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <input
          type="text"
          placeholder="Enter location (e.g. Lagos, Abuja)"
          className="col-span-1 md:col-span-2 px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <select className="px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Purpose</option>
          <option>Buy</option>
          <option>Rent</option>
          <option>Lease</option>
          <option>Shortlet</option>
        </select>

        <select className="px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <input
          type="text"
          placeholder="Price Range"
          className="px-6 py-4 border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="submit"
          className="btn-primary lg:col-span-1 col-span-1"
        >
          Search Properties
        </button>
      </form>
    </div>
  );
}

export default SearchBar;