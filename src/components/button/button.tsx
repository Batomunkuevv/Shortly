import { FC, PropsWithChildren } from "react";
import classnames from "classnames";
import buttonStyles from "./button.module.scss";

type TButton = {
    type?: "button" | "submit" | "reset" | undefined;
    extraClasses?: string;
    link?: string;
    size?: "default" | "small";
};

export const Button: FC<PropsWithChildren<TButton>> = ({ type = "button", children, extraClasses = "", link = "#", size = "default" }) => {
    return (
        <>
            {type ? (
                <button type={type} className={classnames(buttonStyles["button"], extraClasses, { [buttonStyles["button--small"]]: size === "small" })}>
                    {children}
                </button>
            ) : (
                <a href={link} className={classnames(buttonStyles["button"], extraClasses, { [buttonStyles["button--small"]]: size === "small" })}>
                    {children}
                </a>
            )}
        </>
    );
};
