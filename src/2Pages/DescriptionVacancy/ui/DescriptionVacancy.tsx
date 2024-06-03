import React, {useEffect} from 'react';
import cls from "./DescriptionVacancy.module.scss"
import {useAppDispatch, useAppSelector} from "../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";
import {fetchVacancyById} from "../../../5Entites/Vacancy/model/services/fetchVacancyById";
import {useParams} from "react-router-dom";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import Loader from "../../../6Shared/simpleComponents /Loader/Loader";
import {converterDatefromBecend} from "../../../6Shared/helpFeature/converterDatefromBecend";
import {vacancyActions} from "../../../5Entites/Vacancy/model";
import {ExperienceSvgIcons, GradeTitleSvgIcons, WorkplaceTypeSvgIcons} from "../../../6Shared/svg";

const DescriptionVacancy = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const vacancy = useAppSelector((state: RootState) => state.vacancy.vacancy)

    useEffect(() => {
        if (id) dispatch(fetchVacancyById(id))

        return () => {
            dispatch(vacancyActions.reset())
        }

    }, []);

    console.log(vacancy)

    if (vacancy) {
        return (
            <div className={cls.main}>
                <div className={cls.block1}>
                    <div className={cls.sec1}>
                        <h1>
                            {vacancy.title}
                        </h1>
                    </div>
                    <div className={cls.sec2}>
                        <div className={cls.otsec1}>
                            <div className={cls.img}></div>
                            <div className={cls.elementsVacancy}>
                                <div className={cls.boxGradeTitle}>
                                    <GradeTitleSvgIcons className={cls.gradeTitleIcons}/>
                                    <span>{vacancy.grade?.title}</span>
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
                        </div>
                        <div className={cls.otsec2}>
                            <ul className={cls.ul}>
                                <li className={cls.city}>Город - {vacancy.office_title ? vacancy.office_title : "Бишкек"}</li>
                                <li className={cls.createDate}>Дата создания - {converterDatefromBecend(vacancy.created_at)}</li>
                                <li className={cls.updateDate}>Дата обновления - {converterDatefromBecend(vacancy.updated_at)}</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div>
                    <p>
                        {vacancy.description}
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Loader/>
            </div>
        )
    }
};

export default DescriptionVacancy;