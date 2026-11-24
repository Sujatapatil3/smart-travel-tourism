
function PackageCard({ packageData }) {
  return (
    <div className="destination-card">
      <div className="destination-info">
        <h3>{packageData.name}</h3>

        <p>Destination: {packageData.destination}</p>

        <p>Duration: {packageData.duration}</p>

        <p>
          <strong>Price: {packageData.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default PackageCard;
