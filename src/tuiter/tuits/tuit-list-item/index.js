import parse from 'html-react-parser'
import {useDispatch} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import  TuitStats from '../tuit-stats';
import {DELETE_TUIT} from "../../../services/tuits-thunks";
const tuitWithImage=({posts})=>{
    return(
        <div className="row mt-3">
            <div className={`card mx-auto wd-card-bg p-0 ${posts.title?'wd-card-border':''}`} id="c1" style={{"width": "30rem"}}>
                <img src={posts.avatar_image} className="card-img-top m-0 p-1" alt="..." style={{"borderRadius": "0px"}} />
                {posts.cardTitle?
                    <div className={`card-body p-3 ${posts.title?'wd-card-title-border':''}`} id="c2">
                        <h5 className="card-title wd-font-color ">{posts.cardTitle}</h5>
                        <p className="card-text wd-gray-color">{parse(`${posts.cardBody}`)}</p>
                    </div>:''}
            </div>
        </div>
    );
}

const TuitListItem = ({posts}) =>{
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(DELETE_TUIT(id));
    }

    return(
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
                    <img alt={""} src={posts.avatar_image} className="wd-rounded-images" width="50px" height="50px" />
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 p-0">
                    <span className="wd-font-color">{posts.userName}</span>
                    <i className="fa fa-circle-check fa-inverse"></i><br />
                    <span className="wd-gray-color">{posts.handle}&nbsp;.&nbsp;{posts.time}</span><br />
                    <span className="wd-font-color">{posts.tuit}</span>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 ">
                    <IconButton children={<CloseIcon/>} style={{"color":"white"}} onClick={() => {
                        deleteTuitHandler(posts._id);
                    }}/>
                </div>
            </div>
            {/*{posts.cardImage?tuitWithImage({posts}):''}*/}
            {/*{console.log(posts)} */}
            <div className="row mt-2">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='far fa-comment wd-gray-color'>&nbsp;{posts.comments}</i>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-share-alt wd-gray-color'>&nbsp;{posts.retuits}</i>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    {/*<i className='fa fa-heart wd-gray-color'>&nbsp;{posts.likes}</i>*/}
                    <TuitStats tuit={posts}/>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-thumbs-down wd-gray-color'>&nbsp;{posts.dislikes}</i>

                </div>


                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                    <i className='fa fa-download wd-gray-color'></i>
                </div>
            </div>
        </div>
    );
}

export default TuitListItem;