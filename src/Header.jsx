import React, { useState } from "react";
import "./styles.css";
function Header() {
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState("");
  function handleChange(e) {
    const set = e.target.value;
    setSearch(set);
  }
  const handleClick = () => {
    setRequest(search);
    setSearch("");
  };

  return (
    <header>
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Enter Your hero Name"
          onChange={handleChange}
          value={search}
        />
        <button
          className="search-button"
          type="submit"
          value={request}
          onClick={handleClick}
        >
          search
        </button>
      </form>
    </header>
  );
}
export default Header;
