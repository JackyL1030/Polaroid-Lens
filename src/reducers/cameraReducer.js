export const initialState = {
  searchTerm: "",
  photos: [],
  loading: false,
  error: "",
};

export function cameraReducer(state, action) {
  switch (action.type) {
    case "SEARCH_TERM_CHANGED":
      return { ...state, searchTerm: action.payload };
    case "SEARCH_STARTED":
      return { ...state, loading: true, error: "" };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        photos: action.payload,
      };
    case "SEARCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
