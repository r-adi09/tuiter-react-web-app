import React, {useEffect} from "react";
import TuitListItem from "../tuit-list-item"
import {useDispatch, useSelector} from "react-redux";
import {FIND_ALL_TUITS} from "../../../services/tuits-thunks";



const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData);
    console.log(tuits)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FIND_ALL_TUITS())
    }, [])

    return (
        <>
            <div className="list-group wd-post-list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(tuit => {
                            return (<TuitListItem posts={tuit}/>);
                        }
                    )
                }
            </div>
        </>
    );
}

export default TuitList;