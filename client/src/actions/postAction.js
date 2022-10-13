import * as postApi from '../api/PostRequest.js'

export const getTimeLinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREVING_START" });
  try {
    const { data } = await postApi.getTimeLinePosts(id);
    dispatch({ type: "RETREVING_SUCCESSS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREVING_FAIL" });
  }
};
