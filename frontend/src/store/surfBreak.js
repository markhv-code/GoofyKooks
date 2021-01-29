const LOAD = 'surf_breaks/LOAD';
const ADD_ONE = 'surf_breaks/ADD_ONE';

const load = list => ({
    type: LOAD,
    list,
});

const addOneSurfBreak = surfBreak => ({
    type: ADD_ONE,
    surfBreak,
});

export const createSurfBreak = data => async dispatch => {
    const response = await fetch(`/api/surfBreaks`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(response.ok){
        const surfBreak = await response.json();
        dispatch(addOneSurfBreak(surfBreak));
        return surfBreak;
    }
};

export const getOneSurfBreak = id => async dispatch => {
    const response = await fetch(`/api/${id}`);

    if(response.ok){
        const surfBreak = await response.json();
        dispatch(addOneSurfBreak(surfBreak));
    }
};

export const getSurfBreaks = () => async (dispatch) => {
    const response = await fetch(`/api/surf_breaks`);

    if(response.ok){
        const list = await response.json();
        dispatch(load(list));
    }
};

const sortList = (list) => {
    return list.sort((surfBreakA, surfBreakB) => {
        return surfBreakA.no - surfBreakB.no;
    }).map((surfBreak) => surfBreak.id);
};

const initialState = { '0': 
    { id: '0', 
    name: 'spine',
    country: 'brazil',
    state: 'oh',
    city: 'pops',
    privatebreak: false,
    latitude: 21.66024572394572,
    longitude: -157.92715057469777,
    zipcode: '00000',
    waveType: 'Lunch Break'
}};
const surfBreakReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD: {
            const allBreaks = {};
            action.list.forEach(surfBreak => {
                allBreaks[surfBreak.id] = surfBreak;
            });
            return {
                ...allBreaks,
                ...state,
                list: sortList(action.list),
            };
        }
        case ADD_ONE: {
            if (!state[action.surfBreak.id]) {
                const newState = {
                    ...state,
                    [action.surfBreak.id]: action.surfBreak
                };
                const surfBreakList = newState.list.map(id => newState[id]);
                surfBreakList.push(action.surfBreak);
                newState.list = sortList(surfBreakList);
                return newState;
            }
            return {
                ...state,
                [action.surfBreak.id]: {
                    ...state[action.surfBreak.id],
                    ...action.surfBreak,
                }
            };
        }
        default:
            return state;
    }
}

export default surfBreakReducer;