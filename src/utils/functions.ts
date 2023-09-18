import { MouseEvent } from "react";

export const isValidUrl = (string: string) => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
};

export const scrollToAnchor = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const anchor = e.currentTarget;
    const anchorHref = anchor.getAttribute("href");

    if (!anchorHref) return;

    const target = document.querySelector(anchorHref);

    if (!target) return;

    let topOffset = 124;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - topOffset;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
    });
};
