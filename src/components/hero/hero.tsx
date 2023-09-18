import heroIllustration from "../../assets/images/illustration-working.svg";
import heroStyles from "./hero.module.scss";
import { scrollToAnchor } from "../../utils/functions";

export const HeroSection = () => {
    return (
        <div className={heroStyles["hero"]}>
            <div className={heroStyles["hero__container"]}>
                <div className={heroStyles["hero__body"]}>
                    <div className={heroStyles["hero__content"]}>
                        <h1 className="hero__title">More than just shorter links</h1>
                        <p className={heroStyles["hero__text"]}>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                        <a onClick={scrollToAnchor} href="#short" className="button">
                            Get started
                        </a>
                    </div>
                    <div className={heroStyles["hero__image"]}>
                        <img src={heroIllustration} alt="Illustration" title="Illustration" />
                    </div>
                </div>
            </div>
        </div>
    );
};
