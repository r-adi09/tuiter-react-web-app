import React from "react";
import who from "../data/who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";


const WhoToFollowList = () => {
    //const whoArray = useSelector((state) => state.who);

    return (
        <div className="list-group wd-list-group">
            <div className="list-group-item">
                <div className="row">
                    <span className="wd-font-white">Who to follow</span>
                </div>
            </div>
            {
                who.map(w=>{
                    return (
                        <WhoToFollowListItem who={w}/>
                    );
                })
            }
        </div>
    );
}

export default WhoToFollowList;