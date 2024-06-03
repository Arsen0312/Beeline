import React, {useCallback, useEffect, useState} from 'react';
import cls from "./SearchVacancy.module.scss"
import {useAppDispatch, useAppSelector} from "../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";
import {SearchVacancyActions} from "../model/slice/searchVacancySlice";
import {useDebounce} from "../../../6Shared/lib/hooks/useDebounce/useDebounce";
import {RootState} from "../../../1App/Providers/StoreProvider/config/store";

const SearchVacancy = () => {
    const dispatch = useAppDispatch()
    const [localTerm, setLocalTerm] = useState<string>('')
    const term = useAppSelector((state: RootState) => state.SearchVacancy.term)


    const onSearch = useCallback((value: string) => {

        dispatch(SearchVacancyActions.setTerm(value))
    }, [dispatch])

    const onChange = useCallback((value: string) => {
        setLocalTerm(value)
    }, [dispatch])

    useEffect(() => {
        setLocalTerm(term)
    }, [term]);

    const debouncedTerm = useDebounce<string>(localTerm, 600)

    useEffect(() => {
        onSearch(debouncedTerm)
    }, [onSearch, debouncedTerm]);

    return (
        <div className={cls.main}>
            <input
                className={cls.input} placeholder={"Поиск"}
                value={localTerm} onChange={(e) => onChange(e.target.value)}
            />

        </div>
    );
};

export default SearchVacancy;