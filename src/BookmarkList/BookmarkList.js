import React, { Component } from "react";
import BookmarkItem from "../BookmarkItem/BookmarkItem";
import "./BookmarkList.css";
import BookmarksContext from "../BookmarksContext";

class BookmarkList extends Component {
  static defaultProps = {
    bookmarks: [],
  };

  static contextType = BookmarksContext;

  render() {
    const { bookmarks } = this.context;
    return (
      <section className="BookmarkList">
        <h2>Your bookmarks</h2>
        <ul className="BookmarkList__list" aria-live="polite">
          {bookmarks.map((bookmark) => (
            <BookmarkItem key={bookmark.id} {...bookmark} />
          ))}
        </ul>
      </section>
    );
  }
}

export default BookmarkList;
