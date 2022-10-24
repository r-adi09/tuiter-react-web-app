import React from "react";
const WhoToFollowListItem = ({who}) => {
    return (
        <div className="list-group-item">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 px-0">
                    <img alt={""} src={who.avatarIcon} className="img-fluid wd-rounded-images" />
                </div>
                <div className="col-xxl-8 col-xl-7 col-lg-6">
                    <span className="font-weight-bold wd-font-white">{who.userName}</span>&nbsp;
                    <i className="fa fa-circle-check fa-inverse" /><br />
                    <span className="wd-gray-color" >@{who.handle}</span>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 px-0">
                    <div className="btn btn-primary wd-rounded-buttons wd-button-bg">Follow</div>
                </div>
            </div>
        </div>
    );
}

export default WhoToFollowListItem;