import React, {useCallback} from 'react';
import cls from "./ButtonForFastSearch.module.scss"
import {SearchVacancyActions} from "../../Search";
import {useAppDispatch} from "../../../6Shared/lib/hooks/useAppReduxToolkitTools/redux";

interface IButtonForFastSearchProps {
    children: string
}

const ButtonForFastSearch = (props: IButtonForFastSearchProps) => {
    const { children } = props
    const dispatch = useAppDispatch()

    const onClick = useCallback(() => {
        dispatch(SearchVacancyActions.setTerm(children))
    },[])

    return (
        <button className={cls.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonForFastSearch;