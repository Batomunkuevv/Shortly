import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import shortStyles from "./short.module.scss";
import classNames from "classnames";
import { isValidUrl } from "../../utils/functions";

import { TLink } from "../../types";

import { ResultItem } from "../result";
import { Button } from "../button";

export const ShortSection = () => {
    const [copiedLink, setCopiedLink] = useState<TLink | null>(null);
    const [links, setLinks] = useState<TLink[]>([]);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (error) {
            return;
        }

        if (value === "") {
            setError("Please add a link");
            return;
        }

        setIsLoading(true);

        fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
            .then((res) => (res && res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)))
            .then((data) => {
                const link: TLink = {
                    initial: data.result.original_link,
                    result: data.result.short_link,
                    id: Date.now(),
                };

                setLinks([...links, link]);
                setIsLoading(false);
                localStorage.setItem("links", JSON.stringify([...links, link]));
            });

        setValue("");
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const isValidLink = isValidUrl(target.value);

        setError("");

        if (!isValidLink && target.value !== "") setError("Please add a correct link");

        setValue(target.value);
    };

    const handleCopyLink = (link: TLink) => {
        setCopiedLink(link);

        if (!copiedLink) return;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(link.result);
        }
    };

    useEffect(() => {
        const links = localStorage.getItem('links');

        if(links){
            setLinks(JSON.parse(links));
        }
    }, []);

    return (
        <section id="short" className={shortStyles["short"]}>
            <div className="container">
                <h2 className="visually-hidden">Short your link!</h2>
                <form onSubmit={handleFormSubmit} method="post" className={shortStyles["short__form"]}>
                    <div className={shortStyles["short__form-left"]}>
                        <input
                            onInput={handleInputChange}
                            value={value}
                            type="text"
                            className={classNames(shortStyles["short__input"], { [shortStyles["has-error"]]: error })}
                            placeholder="Shorten a link here..."
                        />
                        {(error || isLoading) && <p className={classNames(shortStyles["short__message"], { [shortStyles["has-error"]]: error })}>{error ? <>{error}</> : "Getting link..."}</p>}
                    </div>
                    <Button type="submit" extraClasses={shortStyles["short__btn"]}>
                        Shorten it!
                    </Button>
                </form>
                {links && (
                    <ul className={shortStyles["short__result-list"]}>
                        {links.map((link, i) => (
                            <ResultItem key={i} copyLink={handleCopyLink} copiedLink={copiedLink} {...link} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
