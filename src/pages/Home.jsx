import DestinationList from "../components/DestinationList";
import destinations from "../data/destinations.json";
function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">EXPLORE THE WORLD</p>

          <h1>
            Discover Your Next
            <br />
            Great Adventure
          </h1>

          <p>
            Explore breathtaking destinations, experience new cultures
            and create unforgettable memories.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Where do you want to go?"
            />

            <button>Search</button>
          </div>

          <button className="explore-btn">
            Explore Destinations
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <p className="section-tag">START YOUR JOURNEY</p>

        <h2>Explore Beautiful Places</h2>

        <p>
          From peaceful beaches to adventurous mountains,
          discover places that make every journey special.
        </p>
      </section>

      {/* Popular Destinations Section */}
      <section className="destinations-section">

        <div className="destination-heading">
          <p className="section-tag">TOP DESTINATIONS</p>
          <h2>Popular Destinations</h2>
          <p>Discover some of the world's most beautiful places.</p>
        </div>

        <DestinationList destinations={destinations} />
      </section>

    </div>
  );
}

export default Home;
