import PostSummaryList from "./PostSummary"
import posts from "./posts";

const PostList = () => {
    return (
        <>
            <div className="list-group wd-post-list-group">
                {
                    posts.map(p => {
                        return (<PostSummaryList posts={p}/>);
                    })
                }
            </div>
        </>
    );
}

export default PostList;