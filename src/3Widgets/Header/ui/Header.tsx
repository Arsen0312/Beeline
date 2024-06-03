import React, {useState} from 'react';
import cls from "./Header.module.scss"
import {HeaderVariables} from "../config/variables/headersVariables";
import {Link} from "react-router-dom";

const Header = () => {
    // это нужно для того что бы подчеркнуть Частным лицам/Бизнесу какой из
    // них должен отличаться по цвету, но пока что не понятно как это сделать
    const [isActivateButton, setIsActivateButton] = useState(false)

    return (
        <header className={cls.main}>
            <nav className={cls.nav}>
                <div className={cls.one}>
                        {HeaderVariables.map(variable => (
                            <Link to={`${variable[1]}`}>{variable[0]}</Link>
                        ))}
                </div>
                <div className={cls.two}>
                    <div className={cls.language}>
                        <button>
                            Рус
                        </button>
                        /
                        <button>
                            Кырг
                        </button>
                    </div>
                    <div className={cls.ToPrivateIndividualsBusiness}>
                        <Link to={""}>
                            <button className={cls.toPrivate}>
                                Частным лицам
                            </button>
                        </Link>
                        /
                        <Link to={"https://beeline.kg/b2b/ru"}>
                        <button>
                                Бизнесу
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;