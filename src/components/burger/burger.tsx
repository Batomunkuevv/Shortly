import burgerStlyes from './burger.module.scss';

export const Burger = () => {
    return (
        <button type="button" className={burgerStlyes['burger']}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </button>
    );
};
