import { apiCall } from "../_Services/User-Service";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  REQUEST_USERS_DELETE
} from "../_Constants/User-Constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

export const deleteUser = id =>  ({

    type: REQUEST_USERS_DELETE,
    payload: id
  
  
})

export const requestUsers = () => dispatch => {
  dispatch({ type: REQUEST_USERS_PENDING });
  apiCall(
    "https://randomuser.me/api/?inc=name,gender,email,phone,location,dob,picture"
  )
    .then(data => {
      dispatch({
        type: REQUEST_USERS_SUCCESS,
        payload: data.results
      });
    })
    .catch(error => dispatch({ type: REQUEST_USERS_FAILED, payload: error }));
};
