import { useState, useRef } from "react";
import Books from "../components/Books";
import SearchBooks from "../components/SearchBooks";
import books from "../data/books.json";

const Home = () => {
  const inputRef = useRef(null);
  const [searchString, setSearchString] = useState("");

  const handleSearch = () => {
    setSearchString(inputRef.current.value);
  };

  return (
    <>
      <SearchBooks
        searchString={searchString}
        handleSearch={handleSearch}
        inputRef={inputRef}
      />
      <Books books={books} searchString={searchString} />
    </>
  );
};

export default Home;
