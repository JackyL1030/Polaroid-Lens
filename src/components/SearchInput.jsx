export default function SearchInput(){
    return(
        <div className="search-input-container">
            <label htmlFor="search-input">
                Subject
            </label>

            <input id="search-input" 
            type="text"
            placeholder="Take a picture" />
        </div>
    )
}