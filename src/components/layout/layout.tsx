import { FC } from "react";

import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";
import { HeroSection } from "../hero";
import { ShortSection } from "../short";
import { StatisticSection } from "../statistic";
import { CtaSection } from "../cta";

export const Layout: FC = () => {
    return (
        <div className="wrapper">
            <SiteHeader />
            <main className="site-page">
                <HeroSection />
                <ShortSection />
                <StatisticSection />
                <CtaSection />
            </main>
            <SiteFooter />
        </div>
    );
};
