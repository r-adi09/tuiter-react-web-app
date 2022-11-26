import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
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