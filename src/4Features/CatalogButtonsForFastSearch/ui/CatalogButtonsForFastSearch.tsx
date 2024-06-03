import React from 'react';
import cls from "./CatalogButtonsForFastSearch.module.scss"
import {valueForSearch} from "../config/valueForSearch";
import {ButtonForFastSearch} from "../../ButtonForFastSearch";

interface ICatalogButtonsForFastSearch {
    render: (value: string) => React.ReactElement,

}

const CatalogButtonsForFastSearch = (props: ICatalogButtonsForFastSearch) => {
    const { render } = props

    return (
        <div className={cls.main}>
            {valueForSearch.map(value => render(value))}
        </div>
    );
};

export default React.memo(CatalogButtonsForFastSearch);