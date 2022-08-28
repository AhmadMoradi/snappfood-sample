export default function vendorReducer(state, action) {
  switch (action.type) {
    case "GET_VENDOR":
      return { ...state, isLoading: true };
    case "SET_VENDOR_CODE":
      return { ...state, vendorCode: action.payload };
    case "SET_VENDOR_DATA":
      return { ...state, isLoading: false, vendorData: action.payload };
    default:
      return state;
  }
}
