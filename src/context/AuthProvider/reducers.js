import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
  isAuthLoading: true,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      const { user } = action.payload;
      AsyncStorage.setItem("@USER", JSON.stringify(user));
      return { ...state, user, isAuthLoading: false };
    case "SET_AUTH_LOADING":
      return { ...state, isAuthLoading: action.payload };
    default:
      return state;
  }
}

export default authReducer;
