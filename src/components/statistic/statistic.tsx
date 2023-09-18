import statisticStyles from "./statistic.module.scss";
import brandIcon from "../../assets/images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../../assets/images/icon-detailed-records.svg";
import customizibleIcon from "../../assets/images/icon-fully-customizable.svg";

export const StatisticSection = () => {
    return (
        <section className={statisticStyles['statistic']}>
            <div className="container">
                <h2 className={statisticStyles['statistic__title']}>Advanced Statistics</h2>
                <p className={statisticStyles['statistic__text']}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <ul className={statisticStyles['statistic__list']}>
                    <li className={statisticStyles['statistic__item']}>
                        <div className={statisticStyles["statistic__item-icon"]}>
                            <img src={brandIcon} alt="Statistic icon" title="Statistic icon" />
                        </div>
                        <b className={statisticStyles["statistic__item-title"]}>Brand Recognition</b>
                        <p className={statisticStyles["statistic__item-text"]}>
                            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
                        </p>
                    </li>
                    <li className={statisticStyles['statistic__item']}>
                        <div className={statisticStyles["statistic__item-icon"]}>
                            <img src={detailedRecordsIcon} alt="Detailed records icon" title="Detailed records icon" />
                        </div>
                        <b className={statisticStyles["statistic__item-title"]}>Detailed Records</b>
                        <p className={statisticStyles["statistic__item-text"]}>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                        </p>
                    </li>
                    <li className={statisticStyles['statistic__item']}>
                        <div className={statisticStyles["statistic__item-icon"]}>
                            <img src={customizibleIcon} alt="CustomizibleIcon icon" title="CustomizibleIcon icon" />
                        </div>
                        <b className={statisticStyles["statistic__item-title"]}>Fully Customizable</b>
                        <p className={statisticStyles["statistic__item-text"]}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};
