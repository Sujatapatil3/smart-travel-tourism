import { useState } from "react";
import destinations from "../data/destinations.json";
import DestinationList from "../components/DestinationList";

function Destinations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  const filteredDestinations = destinations.filter((destination) => {
    const searchMatch =
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.region.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "" ||
      destination.category === selectedCategory;

    const price = Number(destination.price.replace(/[₹,]/g, ""));

    const budgetMatch =
      maxBudget === "" || price <= Number(maxBudget);

    return searchMatch && categoryMatch && budgetMatch;
  });

  return (
    <div className="destinations-section">
      <div className="destination-heading">
        <p className="section-tag">EXPLORE THE WORLD</p>
        <h2>Explore All Destinations</h2>
        <p>Find your perfect destination and plan your next adventure.</p>
      </div>

      <div className="destination-filters">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Beach">Beach</option>
          <option value="Adventure">Adventure</option>
          <option value="City">City</option>
        </select>

        <input
          type="number"
          placeholder="Maximum budget (₹)"
          value={maxBudget}
          onChange={(e) => setMaxBudget(e.target.value)}
        />
      </div>

      {filteredDestinations.length > 0 ? (
        <DestinationList destinations={filteredDestinations} />
      ) : (
        <p className="no-results">
          No destinations match your search and filters.
        </p>
      )}
    </div>
  );
}

export default Destinations;