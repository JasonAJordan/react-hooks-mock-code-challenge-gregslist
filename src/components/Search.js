import React, {useState} from "react";

function Search({setSearchTerm}) {

  const [searchText, setSearchText] =useState("")


  function handleSubmit(e) {
    e.preventDefault();
    //console.log("submitted");
    setSearchTerm(searchText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
