import allDestinations from "../data/destinations.json";
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations = allDestinations }) {
  return (
    <div className="destination-grid">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}

export default DestinationList;