import React, {useEffect} from "react";
import TuitListItem from "../tuit-list-item"
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <>
            <div className="list-group wd-post-list-group">
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