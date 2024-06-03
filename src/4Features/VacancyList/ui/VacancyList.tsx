import React from 'react';
import cls from "./VacancyList.module.scss"
import {TVacancy} from "../../../5Entites/Vacancy/model";
import Loader from "../../../6Shared/simpleComponents /Loader/Loader";

interface IVacancyListProps {
    render: (item: TVacancy) => React.ReactElement,
    list: TVacancy[]
    isLoading: Boolean
}

const VacancyList = (props: IVacancyListProps) => {

    const { render, list, isLoading } = props

    if (isLoading) {
        return <Loader/>
    }

    if (!list.length && !isLoading) {
        return <div className={cls.noneVacancy}>
            <h1>
                Ничего не нашлось :–(
            </h1>
            <h4>
            Попробуйте поискать вакансию в другом городе или направлении.
            </h4>
        </div>
    }

    return (
        <div className={cls.main}>
            {list.map((vacancy) => render(vacancy))}
        </div>
    );
};

export default VacancyList;