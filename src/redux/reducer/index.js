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
  LAST_EXPERIENCE_ID,
  GET_COMMENTS,
  ADD_TO_FRIENDS,
  REMOVE_FROM_FRIENDS,
} from "../action/index";

const initialState = {
  profile: [],
  experience: [],
  allProfiles: [],
  allPost: [],
  lastExp: "",
  lastPost: "",
  allComments: [],
  allfriends: [],
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
        profile: [...state.linkedin.profile, action.payload],
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        experience: state.linkedin.experience.concat(action.payload),
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
        lastPost: action.payload,
      };
    case LAST_EXPERIENCE_ID:
      return {
        ...state,
        lastExp: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        allComments: action.payload,
      };
    case ADD_TO_FRIENDS:
      return {
        ...state,
        allfriends: [...state.allfriends, action.payload],
      };
    case REMOVE_FROM_FRIENDS:
      return {
        ...state,
        allfriends: state.allfriends.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
