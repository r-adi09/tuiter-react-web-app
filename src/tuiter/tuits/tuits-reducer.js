import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.heartNumber--;
                    } else {
                        tuit.liked = true;
                        tuit.heartNumber++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            const newTuit = {
                content: action.tuit,
                _id: (new Date()).getTime() + '',
                image: "/img/Starship.webp",
                username: "Elon Musk",
                handle: "@elonmusk",
                timeframe: "23h",
                liked:false,
                commentNumber: 111,
                shareNumber: 222,
                heartNumber: 333,
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }

}

export default tuitsReducer;