/*import Nav from "../nav";
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter;*/

import React from "react";
import './explore/index.css';
import {Route, Routes} from "react-router";
import ExploreComponent from "./explore/ExploreComponent";
import HomeScreen from "./home";

function Tuiter(){
    return(<div>
            <Routes>
                <Route path="home"    element={<HomeScreen/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>

        </div>

    );
}
export default Tuiter;
//import './vendors/bootstrap/bootstrap.min.css';
/*const index = () => {
    return (
        <div>
            <ExploreScreen/>
        </div>
    );

};
export default index;*/

