import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="container">
        <h1 className="navbar">Rick And Morty</h1>
        <div className="navbar-items">
          <Link to="/">Home</Link>
          <Link to="/characters">All Characters</Link>
        </div>
      </nav>
    </>
  );
}
