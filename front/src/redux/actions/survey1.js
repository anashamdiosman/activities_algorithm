import axios from "axios";

export const setFormData = (data) => {
  return {
    type: "POST_FORM_DATA",
    payload: data,
  };
};

export const postSurveyData = (formData) => {
  return (dispatch) => {
    dispatch({ type: "SHOW_MODAL" });
    return axios
      .post("http://localhost:5000/survey1", formData)
      .then((res) => {
        console.log(res.data.data);
        dispatch(setFormData(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};
