import { useState } from "react";
import "./Search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    alert(keyword);
  };
  return (
    <>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product..."
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <input type="submit" value="search" />
      </form>
    </>
  );
};

export default Search;
