import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Save That Job</h1>

      <button className="add-button" type="button">
        + Add Job
      </button>
    </header>
  );
}
