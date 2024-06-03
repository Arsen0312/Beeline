import React from 'react';
import cls from "./SecondHeader.module.scss"
import {headersVariables} from "../config/variables/headersVariables";
import {Link} from "react-router-dom";
import SearchSvgIcons from "./svgIcons/SearchSvgIcons";

const SecondHeader = () => {

    return (
        <div className={cls.main}>
            <div className={cls.wrapper}>
                <img src={"/assets/logo.svglogo.svg"} alt={"none img"} className={cls.logo}/>
                <div className={cls.services}>
                    {headersVariables.map(variables => (
                        <Link to={variables[1]}>{variables[0]}</Link>
                    ))}
                </div>
            </div>
            <div className={cls.boxForSearchAndLogin}>
                <button className={cls.btnSearch}>
                    <SearchSvgIcons/>
                </button>
                <button className={cls.btnLogin}>
                    ВОЙТИ
                </button>
            </div>
        </div>
    );
};

export default SecondHeader;