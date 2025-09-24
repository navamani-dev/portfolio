export default function Header() {
  return (
    <nav className="nav container-fluid">
      <div className="left">
        <img src="code.png" alt="coding image" id="code" />
      </div>

      <div className="dropdown dropstart right">
        <button
          className="btn btn-light dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-bars"></i>{" "}
        </button>

        <ul className="dropdown-menu">
          <li className="dropdown-item">
            {" "}
            <a href="#pro">Projects</a>{" "}
          </li>
          <li className="dropdown-item">
            {" "}
            <a href="#form">Contact us</a>{" "}
          </li>
          <li className="dropdown-item">
            {" "}
            <a href="#skills">Skills</a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}
