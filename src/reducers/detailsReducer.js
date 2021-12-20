const INITAL_VALUE = {
    userDetails: null,
    cameraDetails: null,
    recordings: null
}

export const detailsReducer = (state = INITAL_VALUE, action) => {
    switch(action.type) {
        case 'FETCH_USER_DETAILS': 
            return {...state, userDetails: action.payload }
        case 'FETCH_CAMERA_DETAILS':
            return {...state, cameraDetails: action.payload }
        case 'FETCH_RECORDINGS':
                return { ...state, recordings: action.payload }
        default: 
            return state;
    }
}