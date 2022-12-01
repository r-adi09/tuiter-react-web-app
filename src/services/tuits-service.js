import axios from 'axios';
//const API_BASE = "https://tuiter-node-server-app-r-adi09.herokuapp.com/api";
const API_BASE = "https://render-mongodb-r-adi09.onrender.com/api";
//const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://tuiter-node-server-app-r-adi09.herokuapp.com/api/tuits';
const TUITS_API = `${API_BASE}/tuits`;


console.log('tuits_api',TUITS_API);

export const createTuit = async (tuit) => {
    const currentUser = {
        "username": "NASA",
        "handle": "@nasa",
        "verified": false,
        "avatar_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
    };

    const templateTuit = {
        ...currentUser,
        "topic": "Space",
        "title": "Title",
        "time": "2h",
        "liked": false,
        "replies": 0,
        "retuits": 0,
        "likes": 0,
        "dislikes":0,
        "comments":0
    }

    const newTuit = {
        ...templateTuit,
        ...tuit

    }
    const response = await axios.post(TUITS_API, newTuit)
    return response.data;
}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    console.log(tuits);
    return tuits;

}
export const deleteTuit = async (tuit) => {
    console.log(tuit)
    const response = await axios
        .delete(`${TUITS_API}/${tuit}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    console.log('service',tuit);
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit)
    console.log(response.data)
    return tuit;
}