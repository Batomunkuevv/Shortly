import { FC } from "react";
import classNames from "classnames";
import burgerStlyes from "./burger.module.scss";

import { TBurger } from "../../types";

export const Burger: FC<TBurger> = ({ handleBurgerClick, isOpenPanel }) => {
    return (
        <button onClick={handleBurgerClick} type="button" className={classNames(burgerStlyes["burger"], { [burgerStlyes["is-active"]]: isOpenPanel })}>
            <span className={burgerStlyes["burger__line"]}></span>
            <span className={burgerStlyes["burger__line"]}></span>
            <span className={burgerStlyes["burger__line"]}></span>
        </button>
    );
};
