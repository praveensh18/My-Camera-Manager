const INITAL_VALUE = {
    isSignedIn: null,
    userData: null
}
export const authReducer = (state = INITAL_VALUE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userData: action.payload }
        case 'SIGN_OUT':
            return { state: null, isSignedIn: false, userData: null, }
        default:
            return state;
    }
}