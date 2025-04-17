import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <div className="nav_links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="battle" className="link">
          Battle
        </Link>
        <Link to="leaderBoard" className="link">
          Leaderboad
        </Link>
        <Link to="about" className="link">
          About
        </Link>
      </div>
      <div className="search">
        <Link to="search" className="Advance">
          Search
        </Link>
      </div>
    </nav>
  );
}

