/* eslint-disable no-unused-vars */
export default function reducer(state=[],action){
    switch(action.type){
        case "GET_POSTS":return action.payload;
        case "CREATE_POST":return [...state,action.payload];
        default: return state;
    }
}