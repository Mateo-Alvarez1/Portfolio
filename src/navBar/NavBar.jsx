import "./navbar.css";
const NavBar = () => {
  return (
    <div id="navContainer">
      <ul className="navList">
        <a className="nav-item" href="#home">
          <li>Home</li>
        </a>

        <a className="nav-item" href="#about">
          <li>About</li>
        </a>

        <a className="nav-item" href="#projects">
          <li>Projects</li>
        </a>

        <a className="nav-item" href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
