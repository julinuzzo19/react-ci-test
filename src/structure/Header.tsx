import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li className="flex-1">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="flex-1">
            <Link to={"/about/2"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
