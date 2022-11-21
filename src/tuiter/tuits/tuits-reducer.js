import {CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT} from "../../services/tuits-thunks";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                ...state,
                action.tuit,
            ];
        case UPDATE_TUIT:
            console.log('reducer', action);
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        default:
            return state;
    }

}

export default tuitsReducer;