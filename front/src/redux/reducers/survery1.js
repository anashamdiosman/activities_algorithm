const survey1 = (state = null, action) => {
  switch (action.type) {
    case "POST_FORM_DATA":
      return (state = action.payload);
    default:
      return state;
  }
};

export default survey1;
