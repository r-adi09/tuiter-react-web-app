import {useDispatch} from "react-redux";
import {UPDATE_TUIT} from "../../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        //dispatch({type: 'like-tuit', tuit});

        dispatch(UPDATE_TUIT({
            ...tuit,
            likes: tuit.likes + 1}))
    };
    return (
        <span onClick={likeTuit}>
    {
        tuit.liked &&
        <i className="fas fa-heart me-1 wd-gray-color"
           style={{color: 'red'}}></i>
    }
            {
                !tuit.liked &&
                <i className="far fa-heart me-1 wd-gray-color"></i>
            }
            <span className="wd-gray-color">{tuit.likes}</span>
    </span>
    );
}
export default TuitStats;