import React from "react";
import  PostSummaryItem from "./post-summary-item";
import posts from "./posts"
const PostSummaryList = () => {
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