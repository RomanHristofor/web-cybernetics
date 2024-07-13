import React from 'react';
import styles from './Modal.module.css';

const Modal = ({isModalOpen, children}) => {
    if (!isModalOpen) return null;

    return (
        <div className={styles.overlay}>
            {children}
        </div>
    );
};

export default Modal;