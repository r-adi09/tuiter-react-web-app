import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts"

const PostSummaryList = () => {
    return (
        <div className="list-group wd-list-group">
            {
                posts.map(p => {
                    return (
                        <PostSummaryItem post={p}/>
                    );
                })
            }
        </div>
    );
}

export default PostSummaryList;