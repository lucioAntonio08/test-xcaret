import React from 'react';
import styles from './styles.module.css'
import { BackgroundImage} from '@mantine/core';

const BannerXcaret = () => {
    return (
        <div>
            <div className={styles.footer}>
                <div className={styles.cont}>
                    <h2 className={styles.tittle}>VIAJA Y VUELA</h2>
                    <div className={styles.contFooter}>
                        <h2 className={styles.subTittle}>15 %</h2>
                        <p className={styles.text}
                        >
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
                            "Suscipit veniam eius aperiam beatae perferendis asperiores soluta dolores at
                            dolor nesciunt
                            tempore eaque, quidem mollitia neque libero, reprehenderit placeat vitae ipsa?"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerXcaret;
