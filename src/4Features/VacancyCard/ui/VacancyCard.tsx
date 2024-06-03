import React from 'react';
import cls from "./VacancyCard.module.scss"
import {TVacancy} from "../../../5Entites/Vacancy/model";

import ShareSvgIcons from "../../../6Shared/svg/IconsVacancy/ShareSvgIcons";
import {Link} from "react-router-dom";
import {BeelineSvgLogoIcons, ExperienceSvgIcons, GradeTitleSvgIcons, WorkplaceTypeSvgIcons} from "../../../6Shared/svg";

type TVacancyProps = {
    vacancy: TVacancy
}

const VacancyCard = (props: TVacancyProps) => {
    const { vacancy } = props
    console.log(vacancy)
    return (
        <div className={cls.main}>
            <Link to={`/DescriptionsVacancy/${vacancy.id}`}>
            <div className={cls.wrapper}>
                <div className={cls.title}>
                    <h3>{vacancy.title}</h3>
                </div>
                <div className={cls.two}>
                    <div className={cls.boxGradeTitle}>
                        <GradeTitleSvgIcons className={cls.gradeTitleIcons}/>
                        <span>{vacancy.grade_title}</span>
                    </div>
                    <div className={cls.boxExperience}>
                        <ExperienceSvgIcons className={cls.experienceIcons}/>
                        <span>{vacancy.experience}</span>
                    </div>
                    <div className={cls.boxWorkPlaceType}>
                        <WorkplaceTypeSvgIcons className={cls.workPlaceTypeIcons}/>
                        <span>{vacancy.workplace_type}</span>
                    </div>
                </div>
                <div className={cls.three}>
                    <div className={cls.boxOfficeTitle}>
                        <BeelineSvgLogoIcons className={cls.BeelineLogoIcons}/>
                        <span className={cls.OfficeTitle}>
                            {vacancy.office_title}
                        </span>
                    </div>
                    <div className={cls.createDate}>
                        <span>|</span>
                        <span className={cls.createDateValue}>
                            {vacancy.created_at.slice(0, 10).split("-").reverse().join().replaceAll(',', ".")}
                        </span>
                        <ShareSvgIcons className={''}/>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default VacancyCard;