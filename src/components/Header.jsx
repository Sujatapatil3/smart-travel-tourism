import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>✈</span> TravelEase
      </div>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/inquiry">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;