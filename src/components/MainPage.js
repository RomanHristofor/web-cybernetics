import React, {useState} from 'react';
import AuthModal from "./AuthModal";
import Panel from './Panel';
import styles from './MainPage.module.css';

const MainPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <div className={styles.main}>
            {isModalOpen && (
                <div className={styles.overlay}>
                    <AuthModal onClose={closeModal} />
                </div>
            )}
            <Panel openModal={openModal} />
        </div>
    );
};

export default MainPage;
