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

export const setSessionUser = (creditial, password) => async (dispatch) => {
    const response = await fetch( "/api/session", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"credential": creditial, "password": password})
    });

    if(response.ok) {
        console.log("this is the response data", response.data)
        const userSession = await response.data;
        dispatch(load(userSession));
    };
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
            if(action.user){
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