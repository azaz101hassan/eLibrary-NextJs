import { useState } from "react";
import Book from "./Book";

const Books = ({ books, searchString }) => {
  const checkCondition = (elem) => {
    return elem.toLowerCase().includes(searchString.toLowerCase());
  };

  const filteredBooks = books.filter(
    (book) => checkCondition(book.title) || checkCondition(book.author)
  );
  const foundABook = filteredBooks.length;

  return (
    <section className="grid justify-items-center gap-4">
      {filteredBooks.map((book, index) => {
        return (
          <div key={index} className="border border-gray-100 mt-1">
            <Book book={book} />
          </div>
        );
      })}
      {!foundABook && (
        <div className="mt-10 text-xl">No Book Found. Search for another title/author</div>
      )}
    </section>
  );
};

export default Books;
