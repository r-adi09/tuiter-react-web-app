import React from "react";
import TuitListItem from "../tuit-list-item"
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
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