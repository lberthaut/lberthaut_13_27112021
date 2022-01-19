import { initialStateAuthentification, initialStateUser } from "./initialstate";
import { FETCH_TOKEN } from "./actions";
import { LOGIN } from "./actions";
import { LOGOUT } from "./actions";
import { EDIT_NAME } from "./actions";

const initialState = { ...initialStateUser, ...initialStateAuthentification };

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TOKEN: {
      return {
        ...state,
        token: action.token,
        remember: action.remember,
        user: "",
      };
    }
    case LOGIN: {
      return {
        ...state,
        token: action.token,
        user: action.user,
      };
    }
    case LOGOUT: {
      return initialState;
    }

    case EDIT_NAME: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
