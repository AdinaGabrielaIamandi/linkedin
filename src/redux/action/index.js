// qui verranno inserite tutte le azioni da esportare
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";

export const getProfileAction = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let profile = await res.json();
        dispatch({
          type: GET_PROFILE,
          payload: profile,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProfilesAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let profiles = await res.json();
        dispatch({
          type: GET_ALL_PROFILES,
          payload: profiles,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperienceAction = () => {
  return async (dispatch, getState) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/5fc4af0bb708c200175de88e/experiences",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
        },
      }
    );
    if (res.ok) {
      let experience = await res.json();
      dispatch({
        type: GET_EXPERIENCE,
        payload: experience,
      });
    }
  };
};
