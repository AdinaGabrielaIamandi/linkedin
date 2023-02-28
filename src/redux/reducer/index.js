import { GET_EXPERIENCE, GET_PROFILE, GET_ALL_PROFILES } from "../action";

const initialState = {
  profile: [],
  experience: [],
  allProfiles: [],
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
    case GET_ALL_PROFILES:
      return {
        ...state,
        allProfiles: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
