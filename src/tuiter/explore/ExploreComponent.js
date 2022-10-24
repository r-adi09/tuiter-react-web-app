import PostSummaryList from "../post-summary-list";
import StarShip from "../../images/Starship.webp";
import {BrowserRouter, Link} from "react-router-dom";

const ExploreComponent = () => {
    return (
        <>

                <div className="row mb-0">
                    <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11 ps-0">
                        <div className="input-group">
                            <div className="input-group-text wd-rounded-buttons wd-zero-right-border px-2"
                                 style={{"backgroundColor": "white"}}><span
                                style={{"borderRight": "1px solid white"}}>&#128269;</span></div>
                            <input type="text" className="form-control wd-rounded-buttons wd-search-bar-color"
                                   placeholder="Search Twitter" id="twitterSearch"></input>
                        </div>
                    </div>
                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1 ">
                        <span className="wd-foreground-text position-relative"
                              style={{"bottom":"14px","color": "rgb(114, 145, 196)","fontSize":"45px"}}>&#9881;</span>
                    </div>
                </div>
                <div className="row mt-0">
                    <ul className="nav nav-tabs my-2 ps-0 wd-nav-bg-border">
                        <li className="nav-item active">
                            <Link className="nav-link wd-nav-item">For You</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wd-nav-item">Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wd-nav-item">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link wd-nav-item">Sports</Link>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <Link className="nav-link wd-nav-item">Entertainment</Link>
                        </li>
                    </ul>
                </div>
                <div className="row mb-3">
                    <img src={StarShip} className="img-fluid wd-image-borders col px-0 " alt="StarShip page"/>
                </div>
                <span class="position-relative wd-overlay-name">SpaceX's Starship</span>
                <PostSummaryList/>

        </>
    );
}
export default ExploreComponent;