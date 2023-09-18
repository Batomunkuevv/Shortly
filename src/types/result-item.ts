import { TLink } from "./";

export type TResultItem = TLink & {
    copyLink: (link: TLink) => void;
    copiedLink: TLink | null;
};
