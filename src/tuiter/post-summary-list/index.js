import React from "react";
import  PostSummaryItem from "./post-summary-item";
import posts from "./posts"


const PostSummaryList = () => {
    //const postsArray = useSelector(state => state.tuits)
    return (
        <div className="list-group wd-list-group">
            {
                posts.map(p=>{
                    return(
                        <PostSummaryItem post={p}/>
                    );
                })
            }
        </div>
    ); }

export default PostSummaryList;