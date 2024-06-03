import React from 'react';
import cls from "./AllVacancy.module.scss"
import {ComponentWithSearchAndVacancy} from "../../../3Widgets/ComponentWithSearchAndVacancy";

const AllVacancy = () => {


    return (
        <div className={cls.main}>
            <ComponentWithSearchAndVacancy modeButton={false}/>
        </div>
    );
};

export default AllVacancy;
