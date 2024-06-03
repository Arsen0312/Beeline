import React, {useEffect, useMemo} from 'react';
import cls from "./ComponentWithSearchAndVacancy.module.scss"
import {SearchVacancy} from "../../../4Features/Search";
import {useAppDispatch, useAppSelector} from "../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";
import {IQueriesToVacancy} from "../../../5Entites/Vacancy/model/types/queriesToVacancy";
import {fetchVacancyList} from "../../../5Entites/Vacancy/model/services/fetchVacancyList";
import {VacancyList} from "../../../4Features/VacancyList";
import {TVacancy} from "../../../5Entites/Vacancy/model";
import {VacancyCard} from "../../../4Features/VacancyCard";
import {CatalogButtonsForFastSearch} from "../../../4Features/CatalogButtonsForFastSearch";
import {ButtonForFastSearch} from "../../../4Features/ButtonForFastSearch";
import ButtonBeelineStyle from "../../../6Shared/simpleComponents /ButtonBeelineStyle/ui/ButtonBeelineStyle";
import {Link} from "react-router-dom";

interface IComponentWithSearchAndVacancyProps {
    modeButton: boolean
}

const ComponentWithSearchAndVacancy = (props: IComponentWithSearchAndVacancyProps) => {
    const { modeButton } = props
    const dispatch = useAppDispatch();
    const { data, isLoading } = useAppSelector((state: RootState) => state.vacancy);
    const term = useAppSelector((state: RootState) => state.SearchVacancy.term);

    const params: IQueriesToVacancy = useMemo(() => {
        return {
            search: term
        };
    }, [term]);

    useEffect(() => {
        dispatch(fetchVacancyList(params));
    }, [params]);

    return (
        <div className={cls.main}>
            <SearchVacancy/>
            <CatalogButtonsForFastSearch render={(value: string) => (
                <ButtonForFastSearch>{value}</ButtonForFastSearch>
            )}/>
            <div className={cls.wrapperForTitleAndButton}>
                <h1>Вакансии</h1>
                <Link to={'/AllVacancy'}>
                    <ButtonBeelineStyle mode={!modeButton}>Смотреть ещё</ButtonBeelineStyle>
                </Link>
            </div>
            <VacancyList render={(vacancy: TVacancy) => (
                <VacancyCard vacancy={vacancy}/>
            )} list={data.results} isLoading={isLoading}/>
        </div>
    );
};

export default ComponentWithSearchAndVacancy;