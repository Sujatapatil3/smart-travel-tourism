
function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <div className="destination-info">
        <h3>
          {destination.name}, {destination.country}
        </h3>

        <p>{destination.description}</p>

        <p>
          <strong>Estimated Price: {destination.price}</strong>
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;
