import {
  CHANGE_SEARCHFIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
  REQUEST_USERS_DELETE
} from "../_Constants/User-Constants";

const initialStateSearch = {
  searchField: ""
};

export const searchUsers = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateUsers = {
  users: [],
  isPending: true
};

export const requestUsers = (state = initialStateUsers, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, ...state.users, {
        users: state.users.concat(action.payload),
        isPending: false
      });
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    case REQUEST_USERS_DELETE:
      return Object.assign({}, state, {
        users: state.users.filter((user, id) => id !== action.payload)
      });
    default:
      return state;
  }
};
