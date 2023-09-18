import { FC } from "react";
import resultStyles from "./result.module.scss";
import classNames from "classnames";

import { TResultItem } from "../../types";

export const ResultItem: FC<TResultItem> = ({ copyLink, copiedLink, initial, result, id }) => {
    const isCopied = copiedLink?.id === id;

    const handleCopyClick = () => {
        copyLink({ initial, result, id });
    };

    return (
        <li className={resultStyles["result"]}>
            <span className={resultStyles["result__initial"]}>{initial}</span>
            <div className={resultStyles["result__right"]}>
                <span className={resultStyles["result__link"]}>{result}</span>
                <button onClick={handleCopyClick} className={classNames(resultStyles["result__btn"], { [resultStyles["is-copied"]]: isCopied })}>
                    {!isCopied ? "Copy" : "Copied!"}
                </button>
            </div>
        </li>
    );
};
