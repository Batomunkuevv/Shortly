import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import headerStyles from "./site-header.module.scss";
import classNames from "classnames";

import { Burger } from "../burger";
import { Button } from "../button";

export const SiteHeader = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    let lastScrollTop = 0;

    const initScrolling = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 50) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }
    };

    const animateHeader = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            setIsScrollingDown(true);
        } else {
            setIsScrollingDown(false);
        }

        lastScrollTop = scrollTop;
    };

    useEffect(() => {
        window.addEventListener("scroll", initScrolling);
        window.addEventListener("scroll", animateHeader);

        return () => {
            window.removeEventListener("scroll", initScrolling);
            window.removeEventListener("scroll", animateHeader);
        };
    }, []);

    return (
        <div className={classNames(headerStyles["site-header"], { [headerStyles["is-scrolling-down"]]: isScrollingDown })}>
            <div className={classNames(headerStyles["site-header__container"], "container", { [headerStyles["is-scrolling"]]: isScrolling })}>
                <div className={headerStyles["site-header__body"]}>
                    <a href="/" className="site-header__logo">
                        <img src={logo} alt="Shortly Logo" title="Shortly Logo" />
                    </a>
                    <div className={headerStyles["site-header__panel"]}>
                        <nav className="menu">
                            <ul className={headerStyles["menu__list"]}>
                                <li className="menu__item">
                                    <a href="/" className={headerStyles["menu__link"]}>
                                        Features
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/" className={headerStyles["menu__link"]}>
                                        Pricing
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/" className={headerStyles["menu__link"]}>
                                        Resources
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className={headerStyles["site-header__user-actions"]}>
                            <button type="button" className={headerStyles["site-header__login"]}>
                                Login
                            </button>
                            <Button size="small">Sign Up</Button>
                        </div>
                    </div>
                    <Burger />
                </div>
            </div>
        </div>
    );
};
