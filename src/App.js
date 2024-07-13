import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/MainPage';
import styles from './App.module.css';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/main" element={<div>Наслаждайтесь просмотром</div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
