import "../styles/SearchInput.css";

export default function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-input-container">
      <label htmlFor="search-input">Subject</label>

      <input
        id="search-input"
        type="text"
        placeholder="Take a picture"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}
