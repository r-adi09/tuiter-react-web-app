const PostSummaryItem = ({post}) => {
    return(
        <div className="list-group-item row p-0">
            <div className="row">
                <div className="col-xxl-10 col-xl-8 col-lg-8 col-sm-8">
                    <span className="wd-gray-color">{post.topic}</span><br />
                    <span className="font-weight-bold wd-font-color" >{post.userName}</span>
                    <i className="fa fa-circle fa-inverse"></i>
                    <span className="wd-gray-color" >&nbsp;{post.time}</span><br />
                    <span className="font-weight-bold wd-font-color">{post.title}</span>
                </div>
                <div className="m-xxl-0 col-xxl-2 col-xl-3 offset-xl-1 col-lg-4  offset-lg-0 col-md-2 offset-md-2 col-sm-3 offset-sm-1 my-auto ">
                    <div className="card my-auto" style={{"width": "5em"}}>
                        <img src={post.image} className="card-img-top my-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;