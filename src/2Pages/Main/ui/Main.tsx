import React from 'react';
import cls from "./Main.module.scss"
import {ComponentWithSearchAndVacancy} from "../../../3Widgets/ComponentWithSearchAndVacancy";
import VideoForMainPage from "../../../4Features/VideoForMainPage/ui/VideoForMainPage";
import JobInBeeline from "./JobInBeeline/ui/JobInBeeline";
import OurMission from "./OurMission/ui/OurMission";

const Main = () => {

    return (
        <div>
            <ComponentWithSearchAndVacancy modeButton={true}/>
            <JobInBeeline/>
            <OurMission/>
            <VideoForMainPage/>
        </div>
    );
};

export default Main;