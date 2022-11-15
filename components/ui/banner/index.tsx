import React from 'react';
import styles from './styles.module.css'

const BannerXcaret = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.cont}>
                <h2 className={styles.tittle}>OUTLET XCARET</h2>
                <div className={styles.contFooter}>
                    <h2 className={styles.subTittle}>00 %</h2>
                    <p className={styles.text}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam at porttitor sem. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default BannerXcaret;
