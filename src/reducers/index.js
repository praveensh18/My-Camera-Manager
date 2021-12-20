import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './authReducer';
import { detailsReducer } from './detailsReducer';

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    details: detailsReducer
})

// reducer to reset the state if action is SIGN_OUT
export const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT') {
        return appReducer(undefined, action)
      }
    return appReducer(state, action)
  }
  