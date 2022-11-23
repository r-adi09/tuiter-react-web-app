import React, {useState} from "react";
import {useDispatch}
    from "react-redux";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import IconButton from '@mui/material/IconButton';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MoodIcon from '@mui/icons-material/Mood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {createTuit} from "../../../services/tuits-thunks";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 px-2">
                    <img alt={""} className="wd-rounded-images" src="/img/Starship.webp" width="50px" height="50px"/>
                </div>
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 ps-0">
                    <textarea value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)} style={{"width":"100%","background":"black","color":"lightgray"}} placeholder="What's Happening?">
                    </textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 px-2"></div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 ps-0">
                    <IconButton children={<PhotoSizeSelectActualIcon/>} style={{"color":"rgb(114, 145, 196)"}}/>
                    &nbsp;
                    <IconButton children={<AutoGraphIcon/>} style={{"color":"rgb(114, 145, 196)"}}/>
                    &nbsp;
                    <IconButton children={<MoodIcon/>} style={{"color":"rgb(114, 145, 196)"}}/>
                    &nbsp;
                    <IconButton children={<CalendarTodayIcon/>} style={{"color":"rgb(114, 145, 196)"}}/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="btn btn-primary wd-button-bg wd-rounded-buttons  me-auto" style={{"width":"50%"}}
                         onClick={tuitClickHandler}>Tuit
                    </div>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening