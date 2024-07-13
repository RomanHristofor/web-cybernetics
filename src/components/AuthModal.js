import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './AuthModal.module.css';

const AuthModal = ({onClose}) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmailOrPhone = (input) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?[1-9]\d{1,14}$/;
        return emailPattern.test(input) || phonePattern.test(input);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!emailOrPhone || !password) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        if (!validateEmailOrPhone(emailOrPhone)) {
            setError('Введите корректный email или телефон');
            return;
        }

        setError('');
        onClose();
        navigate('/main');
    };

    return (
        <div className={styles.modal}>
            <button className={styles.closeButton} onClick={onClose}>×</button>
            <h2 className={styles.title}>Войти в систему</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email/Телефон"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                />
                {error && <span className={styles.error}>{error}</span>}
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.rememberMe}>
                    <input type="checkbox" /> <span>Запомнить пароль</span>
                </label>
                <a href="#" className={styles.restore}>Восстановить</a>
                <div className={styles.login}>
                    <button type="submit" className={styles.loginButton}>Войти</button>
                    <button type="button" className={styles.registerButton}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
};

export default AuthModal;
