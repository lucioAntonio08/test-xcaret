import React, {FC} from 'react';
import Image from "next/image";
import xcaret from '../../images/xcaret-footer.jpg'
import logo from '../../images/Xcaret-logo.png'
import styles from './style.module.css'
interface ICardNeeds {
    title: string,
    text: string,
    subText: string
    isImageLeft?: boolean
}
const CardXcaret: FC<ICardNeeds> = ({isImageLeft,text,title,subText}) => {
    return (
        <div
            className={styles.main}
        >
            <div
                style={{flexDirection:  isImageLeft ? 'initial' : 'row-reverse'}}
                className={styles.cont}>
                <Image
                    src={xcaret}
                    alt={'img'}
                    className={styles.img}
                />

                <div className={styles.info}>
                    <Image
                        src={logo}
                        alt={'logo'}
                        className={styles.logo}
                    />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.text}>{subText}</p>
                    <button className={styles.btn}>¡RESERVA AHORA!</button>
                </div>
            </div>
        </div>
    );
};

export default CardXcaret;
