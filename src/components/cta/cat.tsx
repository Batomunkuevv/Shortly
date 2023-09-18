import ctaStyles from './cta.module.scss';
import { scrollToAnchor } from '../../utils/functions';
import classNames from 'classnames';

export const CtaSection = () => {
    return (
        <section className={ctaStyles['cta']}>
            <div className="container">
                <div className={ctaStyles['cta__body']}>
                    <h2 className={ctaStyles['cta__title']}>Boost your links today</h2>
                    <a onClick={scrollToAnchor} href='#short' className={classNames(ctaStyles['cta__btn'], 'button')}>Get Started</a>
                </div>
            </div>
        </section>
    );
};
