import axios from 'axios';

// ENCODED_DATA encoding CLIENT_ID, CLIENT_SECRET in Base64 
// Adding AUTHORIZATION to the header
const CLIENT_ID = 'dev_test';
const CLIENT_SECRET = '3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ';
const ENCODED_DATA = window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);
const AUTHORIZATION = "Basic " + ENCODED_DATA;


// Action Creators
export const signIn = (formValues) => {
    const url = `https://rest.cameramanager.com/oauth/token?grant_type=password&scope=write&username=${formValues.username}&password=${formValues.password}`;
    return async (dispatch) => {
        const response = await axios.post(url, {formValues}, {
            headers: {
                Authorization: AUTHORIZATION,
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
              }
        });
        dispatch({ type: 'SIGN_IN', payload: response.data})
    }
}

export const signOut = (signInDetails) => {
    const url = 'https://rest.cameramanager.com/rest/v2.0/users/self/tokens/current';
    return async (dispatch) => {
        const response = await axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + signInDetails
            }
        });
        dispatch({ type: 'SIGN_OUT', payload: response.data})
    }
}

export const fetchUserDetails = (token) => {
    return async (dispatch) => {
        const response = await axios.get('https://rest.cameramanager.com/rest/v2.3/users/self', {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        dispatch({ type: 'FETCH_USER_DETAILS', payload: response.data})
    }
}

export const fetchCameraDetails = (token) => {
    const url = 'https://rest.cameramanager.com/rest/v2.0/cameras/'
    return async (dispatch) => {
        const response = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        dispatch({ type: 'FETCH_CAMERA_DETAILS', payload: response.data })
    }
}

export const fetchRecordings = (cameraId, token) => {
    const url = `https://rest.cameramanager.com/rest/v2.0/cameras/${cameraId}/recordings?includeUrlType=MP4HTTPS&sortByRecordingIdOrder=DESC`
    return async (dispatch) => {
        const response = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        });
        dispatch({ type: 'FETCH_RECORDINGS', payload: response.data })
    }
}