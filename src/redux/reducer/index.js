import {
  GET_EXPERIENCE,
  GET_PROFILE,
  GET_ALL_PROFILES,
  PUT_PROFILE,
  POST_PROFILE_IMAGE,
  ADD_EXPERIENCE,
  GET_POST,
  POST_POST,
  LAST_POST_ID,
  LAST_EXPERIENCE_ID
  GET_COMMENTS,
} from "../action";

const initialState = {
  profile: [],
  experience: [],
  allProfiles: [],
  allPost: [],
  lastExp: "",
  lastPost: ""
  allComments: [],
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
    case POST_PROFILE_IMAGE:
      return {
        ...state,
        profile: [...state.profile, action.payload],
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
    case POST_POST:
      return {
        ...state,
        allPost: state.allPost.concat(action.payload),
      };
    case LAST_POST_ID:
      return {
        ...state,
        lastPost: action.payload
      };
    case LAST_EXPERIENCE_ID:
      return {
        ...state,
        lastExp: action.payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        allComments: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
