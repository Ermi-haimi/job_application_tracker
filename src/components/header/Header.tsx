import "./Header.css";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Save That Job</h1>
      <NavLink className={"home-button"} to={"/"}>
        Home
      </NavLink>
      <NavLink className="add-button" to={"/new_application"}>
        + Add Job
      </NavLink>
    </header>
  );
}
