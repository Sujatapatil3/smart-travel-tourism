
import packages from "../data/packages.json";
import PackageCard from "../components/PackageCard";

function Packages() {
  return (
    <div className="destinations-section">

      <div className="destination-heading">
        <p className="section-tag">EXPLORE OUR OFFERS</p>

        <h2>Tour Packages</h2>

        <p>Choose a package for your next adventure.</p>
      </div>

      <div className="destination-grid">
        {packages.map((packageData) => (
          <PackageCard
            key={packageData.id}
            packageData={packageData}
          />
        ))}
      </div>

    </div>
  );
}

export default Packages;
