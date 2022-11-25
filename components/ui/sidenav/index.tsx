import React from 'react';
import styles from './style.module.css'

export const Sidenav = () => {
    return (
        <div className={styles.main}>
            <button>Readme</button>
            <button>Deskptop</button>
            <button>mobil</button>
        </div>
    );
};
