const WhoToFollowListItem=(who)=>
{
    return(`
            <div class="list-group-item">
                <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 px-0">
                    <img src="${who.avatarIcon}" class="img-fluid">
                </div>
                <div class="col-xxl-8 col-xl-7 col-lg-6">
                    <span class="font-weight-bold wd-font-white">${who.userName}</span>&nbsp;
                    <i class="fa fa-circle-check fa-inverse"></i><br>
                    <span class="wd-gray-color" >@${who.handle}</span>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-4 px-0">
                    <div class="btn btn-primary wd-rounded-buttons wd-button-bg">Follow</div>
                </div>
            </div>
            </div>
            
    `);
}

export default WhoToFollowListItem;