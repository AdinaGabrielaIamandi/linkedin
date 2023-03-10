// qui verranno inserite tutte le azioni da esportare
export const GET_PROFILE = "GET_PROFILE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
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
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";
export const REMOVE_FROM_FRIENDS = "REMOVE_FROM_FRIENDS";
export const GET_LIST_WORKS = "GET_LIST_WORKS";
export const ADD_FAVOURITE_JOBS = "ADD_FAVOURITE_JOBS";
export const REMOVE_FAVOURITE_JOBS = "REMOVE_FAVOURITE_JOBS";

// ADD & REMOVE FRIENDS

export const addFriend = (props) => ({
  type: ADD_TO_FRIENDS,
  payload: props
});

export const removeFriend = (props) => ({
  type: REMOVE_FROM_FRIENDS,
  payload: props
});

// ADD & REMOVE JOBS

export const addJobs = (props) => ({
  type: ADD_FAVOURITE_JOBS,
  payload: props
});

export const removeJobs = (props) => ({
  type: REMOVE_FAVOURITE_JOBS,
  payload: props
});

export const getProfileAction = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
      });
      if (res.ok) {
        let profile = await res.json();
        dispatch({
          type: GET_PROFILE,
          payload: profile
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getMyProfileAction = (id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
      });
      if (res.ok) {
        let meprofile = await res.json();
        dispatch({
          type: GET_MY_PROFILE,
          payload: meprofile
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
      });
      if (res.ok) {
        let profiles = await res.json();
        dispatch({
          type: GET_ALL_PROFILES,
          payload: profiles
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperienceAction = (id) => {
  return async (dispatch, getState) => {
    let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
      }
    });
    if (res.ok) {
      let experience = await res.json();
      dispatch({
        type: GET_EXPERIENCE,
        payload: experience
      });
    }
  };
};

export const putFirstPageAction = (props) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
      if (res.ok) {
        let profile = await res.json();
        dispatch({
          type: PUT_PROFILE,
          payload: props
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//

export const addExperienceAction = (props, idUtente, file) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
      if (res.ok) {
        let data = await res.json();
        console.log("id exp foto", data._id);
        let res2 = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences/${data._id}/picture`,
          {
            method: "POST",
            body: file, //non serve JSON.stringify
            headers: {
              //NON serve ContentType :)
              Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
            }
          }
        );
        if (res2.ok) {
          let data2 = await res2.json();
          dispatch({
            type: LAST_EXPERIENCE_ID,
            payload: data2._id
          });
        }
      } else {
        console.log("ATTENTION:");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putExperience = (props, idUtente, id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences/${id}`, {
        method: "PUT",

        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
      if (res.ok) {
        let profile = await res.json();
        console.log("PROFILE PUT EXP", profile);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteExperience = (idUtente, id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${idUtente}/experiences/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
        // body: JSON.stringify(props),
      });
      if (res.ok) {
        let profile = await res.text();
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
            Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
          }
        }
      );
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: GET_POST,
          payload: data
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// POST HOMEPAGE

export const addPostAction = (props, file) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
      if (res.ok) {
        let data = await res.json();
        let res2 = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${data._id}`, {
          method: "POST",
          body: file, //non serve JSON.stringify
          headers: {
            //NON serve ContentType :)
            Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
          }
        });
        if (res2.ok) {
          let post = await res2.json();
          dispatch({
            type: LAST_POST_ID,
            payload: post._id
          });
        } else {
          console.log("Foto non inviata");
        }
      } else {
        console.log("ATTENTION:");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (_id) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + _id, {
        method: "DELETE",

        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
        // body: JSON.stringify(props),
      });
      if (res.ok) {
        let profile = await res.text();
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + _id, {
        method: "PUT",

        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        },
        body: JSON.stringify(props)
      });
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + id, {
        method: "DELETE",

        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
        // body: JSON.stringify(props),
      });
      if (res.ok) {
        let deletePost = await res.text();
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id + "/picture", {
        method: "POST",
        body: file, //non serve JSON.stringify
        headers: {
          //NON serve ContentType :)
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
      });
      if (res.ok) {
        let data = await res.json();
        dispatch({
          type: POST_PROFILE_IMAGE,
          payload: file
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
            Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
          }
        }
      );
      if (res.ok) {
        let data = await res.json();
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
      let res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "POST",
        body: file, //non serve JSON.stringify
        headers: {
          //NON serve ContentType :)
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_LINKEDIN
        }
      });
      if (res.ok) {
        let data = await res.json();
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_COMMENT
        }
      });
      if (res.ok) {
        let comments = await res.json();
        dispatch({
          type: GET_COMMENTS,
          payload: comments
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_COMMENT
        }
      });
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
      let res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_COMMENT
        }
      });
      if (res.ok) {
        let commentToDelet = await res.text();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// PUT COMMENT

export const editCommentAction = (props, id) => {
  return async (dispatch) => {
    try {
      let res = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "PUT",

        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_TOKEN_COMMENT
        },
        body: JSON.stringify(props)
      });
      if (res.ok) {
        const editComment = await res.json();
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// GET WORKS

export const getListWorkAction = (query) => {
  return async (dispatch, getState) => {
    try {
      let res = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");

      if (res.ok) {
        let works = await res.json();
        dispatch({
          type: GET_LIST_WORKS,
          payload: works
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
