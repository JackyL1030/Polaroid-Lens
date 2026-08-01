import "../styles/SearchInput.css";

export default function SearchInput({ searchTerm, dispatch }) {
  return (
    <div className="search-input-container">
      <label htmlFor="search-input">Subject</label>

      <input
        id="search-input"
        type="text"
        placeholder="Take a picture"
        value={searchTerm}
        onChange={(event) =>
          dispatch({
            type: "SEARCH_TERM_CHANGED",
            payload: event.target.value,
          })
        }
      />
    </div>
  );
}
