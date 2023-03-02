import {
  GET_EXPERIENCE,
  GET_PROFILE,
  GET_ALL_PROFILES,
  PUT_PROFILE,
  ADD_EXPERIENCE,
  PUT_EXPERIENCE,
  GET_POST,
} from "../action";

const initialState = {
  profile: [],
  experience: [],
  allProfiles: [],
  allPost: [],
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
    case PUT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.concat(action.payload),
      };
    case GET_POST:
      return {
        ...state,
        allPost: action.payload,
      };

    /*case PUT_EXPERIENCE:
      let index = state.experience.findIndex(
        (exp) => action.payload_id === exp._id
      );

      return {
        ...state,
        experience: (state.experience[index] = action.payload),
      };*/

    default:
      return state;
  }
};

export default mainReducer;
