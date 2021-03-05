import React from "react";

const BookmarksContext = React.createContext({
  booksmarks: [],
  addBookmark: () => {},
  deleteBookmark: () => {},
});

export default BookmarksContext;
