// qui verranno inserite tutte le azioni da esportare
export const GET_PROFILE = "GET_PROFILE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const PUT_PROFILE = "PUT_PROFILE";
export const POST_PROFILE_IMAGE = "POST_PROFILE_IMAGE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const PUT_EXPERIENCE = "PUT_EXPERIENCE";
export const GET_POST = "GET_POST";
export const POST_POST = "POST_POST";
export const PUT_POST_EDITED = "PUT_POST_EDITED";
export const LAST_POST_ID = "LAST_POST_ID";
export const LAST_EXPERIENCE_ID = "LAST_EXPERIENCE_ID";
export const GET_COMMENTS = "GET_COMMENTS";

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
        let data = await res.json();
        dispatch({
          type: LAST_EXPERIENCE_ID,
          payload: data._id,
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
            "Content-type": "application/json",
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
            "Content-type": "application/json",
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

//POST GET

export const getPostAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/ ",

        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_POST,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// POST HOMEPAGE

export const addPostAction = (props) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
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
        let post = await res.json();
        dispatch({
          type: LAST_POST_ID,
          payload: post._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (_id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + _id,
        {
          method: "DELETE",

          headers: {
            "Content-type": "application/json",
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

export const putPost = (props, _id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + _id,
        {
          method: "PUT",

          headers: {
            "Content-type": "application/json",
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

// PUT EDIT POST

export const putPostEditedAction = (props, id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + id,
        {
          method: "PUT",

          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let postToEdit = await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// DELETE POST

export const deletePostAction = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + id,
        {
          method: "DELETE",

          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
          // body: JSON.stringify(props),
        }
      );
      if (res.ok) {
        let deletePost = await res.json();

        console.log("CIAOOOOO", id);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST FOTO USER

export const addFotoProfile = (file, id) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id + "/picture",
        {
          method: "POST",
          body: file, //non serve JSON.stringify
          headers: {
            //NON serve ContentType :)
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: POST_PROFILE_IMAGE,
          payload: file,
        });
        console.log("FOTO INVIATA");
      } else {
        console.log("ATTENTION:");
      }
    } catch (error) {
      console.log("ERROR: " + error.message);
    }
  };
};

//ADD FOTO EXP

export const addFotoExp = (file, idProfile, idExp) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${idProfile}/experiences/${idExp}/picture`,
        {
          method: "POST",
          body: file, //non serve JSON.stringify
          headers: {
            //NON serve ContentType :)
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        return data;
      } else {
        console.log("ATTENTION:");
      }
    } catch (error) {
      console.log("ERROR: " + error.message);
    }
  };
};

//ADD FOTO POST

export const addFotoPost = (file, idPost) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${idPost}`,
        {
          method: "POST",
          body: file, //non serve JSON.stringify
          headers: {
            //NON serve ContentType :)
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjYzMyM2YxOTNlNjAwMTM4MDdmNmEiLCJpYXQiOjE2Nzc1MDk0MTEsImV4cCI6MTY3ODcxOTAxMX0.R53lHjWog6EJvRCyB0VUk4MSezgPNRWZ6qSfsQZk7F4",
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        return data;
      } else {
        console.log("ATTENTION:");
      }
    } catch (error) {
      console.log("ERROR: " + error.message);
    }
  };
};

// GET COMMENT FETCH DIFFERENT KEY

export const getCommentAction = () => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjBkZTAyY2FjZDAwMTMyZjE5OTMiLCJpYXQiOjE2NzgwOTQ1NTgsImV4cCI6MTY3OTMwNDE1OH0.3JzuoAwpie8rPAglhCDeNuAHhZY01BetkUJHZldeBOw",
          },
        }
      );
      if (res.ok) {
        let comments = await res.json();
        dispatch({
          type: GET_COMMENTS,
          payload: comments,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//POST COMMENT

export const postCommentAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(props),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjBkZTAyY2FjZDAwMTMyZjE5OTMiLCJpYXQiOjE2NzgwOTQ1NTgsImV4cCI6MTY3OTMwNDE1OH0.3JzuoAwpie8rPAglhCDeNuAHhZY01BetkUJHZldeBOw",
          },
        }
      );
      if (res.ok) {
        return await res.json();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// DELETE COMMENT

export const deleteCommentAction = (props) => {
  return async (dispatch) => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjBkZTAyY2FjZDAwMTMyZjE5OTMiLCJpYXQiOjE2NzgwOTQ1NTgsImV4cCI6MTY3OTMwNDE1OH0.3JzuoAwpie8rPAglhCDeNuAHhZY01BetkUJHZldeBOw",
          },
        }
      );
      if (res.ok) {
        let commentToDelet = await res.json();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
