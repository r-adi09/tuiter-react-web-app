import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {
    return (
        <>
            <div className="row">
                <div className="list-group  wd-list-group col-xxl-12 col-xl-12 col-lg-11">
                    <div className="list-group-item">
                        <Link to="/">
                            <i className="fab fa-twitter wd-font-color"></i><br/>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <Link to="/tuiter/home">
                            <div className="row">
                                <i className="fa fa-home wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Home</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <Link to="/tuiter/explore">
                            <div className="row">
                                <i className="fa fa-hashtag fa-inverse col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Explore</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}
                         style={{"borderTopWidth": "0px"}}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-bell col-xxl-2 col-xl-2 wd-font-color"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Notifications</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-envelope wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Messages</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-bookmark wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Bookmarks</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-list wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Lists</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <Link to="#">
                            <div className="row">
                                <i className="fa fa-user wd-font-color col-xxl-2 col-xl-2"></i>
                                <div className="col-xxl-10 col-xl-10 d-none d-xl-block position-relative ps-1"
                                     style={{"bottom": "3px"}}><span className="wd-font-color">Profile</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className={`list-group-item ps-1 ${active === 'more' ? 'active' : ''}`}>
                        <Link to="#">
                         <span className="fa-stack fa-1x">
                             <i className="fa fa-circle fa-stack-1x fa-inverse"></i>
                             <i className="fa fa-ellipsis fa-stack-1x"></i>
                        </span>
                            <span className="position-absolute d-none d-xl-block wd-font-color"
                                  style={{"left": "35px", "top": "11px"}}>More</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row px-2">
                <div className="btn btn-primary col-xxl-12 col-xl-12  mt-2  wd-button-bg wd-rounded-buttons"
                >Tweet
                </div>
            </div>
        </>
    )
        ;
}
export default NavigationSidebar;