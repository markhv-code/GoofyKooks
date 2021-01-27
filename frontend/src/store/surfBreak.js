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