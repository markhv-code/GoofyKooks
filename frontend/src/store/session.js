import { fetch } from "./csrf";

const LOAD = "session/LOAD";
const REMOVE = "session/REMOVE"

const load = (user) => ({
    type: LOAD,
    user
})

const remove = () => ({
    type: REMOVE,

})

export const setSessionUser = (signIn) => async (dispatch) => {
    const response = await fetch( "/api/session", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"credential": signIn.credential, "password": signIn.password})
    });

    if(response.ok) {
        console.log(response, "response");
        const userSession = await response.data;
        dispatch(load(userSession));
    };
};

export const restoreSessionUser = () => async dispatch => {
    const response = await fetch("/api/session");

    if (response.ok) {
        const restoredUser = await response.data;
        dispatch(load(restoredUser));
    }
};

export const signup = (user) => async (dispatch) => {
    console.log("this is the user", user)
    const { username, email, password } = user;
    const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
    dispatch(load(response.data.user));
    return response;
};

export const removeSessionUser = () => async (dispatch) => {
    const response = await null;

    if(response.ok) {
        const removeSession = await response.json();
        dispatch(remove(removeSession));
    };
};

const initalState = {user: null}
export default function sessionReducer(state = initalState, action) {
    switch(action.type) {
        case LOAD: {
            if(Object.keys(action.user).length !== 0){
                return {
                    ...state,
                   user: action.user
                }
            }
            return state;
        }
        case REMOVE: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}