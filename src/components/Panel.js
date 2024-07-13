import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './Panel.module.css';

const imageUrl = require('../assets/pc_1980.svg').default;

const Panel = ({openModal}) => {
    return (
        <div className={styles.panel}>
            <div className={styles.demoBox}>
                <h2 className={styles.title}>Демо-версия</h2>
                <p className={styles.description}>
                    За 18 лет деятельности было реализовано более 500 крупных, а также, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить
                </p>
                <button
                    className={styles.demoButton}
                    onClick={openModal}
                >
                    Попробовать бесплатно
                    <span className={styles.iconCircle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className={styles.icon}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className={styles.image}>
                <LazyLoad>
                    <img src={imageUrl} alt="Demo" className={styles.image}/>
                </LazyLoad>
            </div>
        </div>
    );
};

export default Panel;
