import React from 'react';
import Panel from './Panel';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.main}>
            <Panel />
        </div>
    );
};

export default MainPage;
