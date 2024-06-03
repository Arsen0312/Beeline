import React, {ButtonHTMLAttributes} from 'react';
import cls from "./ButtonBeelineStyle.module.scss"
import {classNames} from "../../../lib/classNames/classNames";

interface IButtonBeelineStyleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    mode: boolean
}

const ButtonBeelineStyle = (props: IButtonBeelineStyleProps) => {
    const { children, mode, ...OtherProps } = props

    return (
        <button className={classNames(cls.main, {[cls.none]:mode})} {...OtherProps}>
            {children}
        </button>
    );
};

export default ButtonBeelineStyle;