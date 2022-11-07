import profileJson from "../data/profile.json";

const profileReducer = (state = profileJson,action) => {
    switch (action.type) {
        case 'modify-profile':
            const newProfile = { ...state, ...action.profile };
            return newProfile;
        default: return(state);
    }

};

export default profileReducer;