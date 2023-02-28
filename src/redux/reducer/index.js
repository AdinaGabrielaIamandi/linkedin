import { GET_EXPERIENCE, GET_PROFILE } from "../action";

const initialState = {
  profile: [],
  experience: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
