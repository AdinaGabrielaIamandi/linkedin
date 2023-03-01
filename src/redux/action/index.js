// qui verranno inserite tutte le azioni da esportare
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const PUT_PROFILE = "PUT_PROFILE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const PUT_EXPERIENCE = "PUT_EXPERIENCE";

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
      "https://striveschool-api.herokuapp.com/api/profile/63fcc323f193e60013807f6a/experiences",
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

export const putFirstPageAction = (props) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let profile = await res.json();
        dispatch({
          type: PUT_PROFILE,
          payload: props,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
//
export const addExperienceAction = (props) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63fcc323f193e60013807f6a/experiences",
        {
          method: "POST",

          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let exp = await res.json();
        console.log("FETCH EXP", exp);

        dispatch({
          type: ADD_EXPERIENCE,
          payload: props,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putExperience = (props, id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63fcc323f193e60013807f6a/experiences/" +
          id,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let profile = await res.json();
        console.log("PROFILE PUT EXP", profile);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperience = (_id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63fcc323f193e60013807f6a/experiences/" +
          _id,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          // body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let profile = await res.json();
        console.log("DELETE PROFILE", profile);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
