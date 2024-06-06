import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar text-center">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
