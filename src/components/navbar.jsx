import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="battle"></Link>
      <Link to="leaderBoard"></Link>
      <Link to="about"></Link>
    </nav>
  );
}

