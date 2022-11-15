import React from 'react';
import Image from "next/image";
import imagen from '../../images/xcaret-footer.jpg'
import logo from '../../images/Xcaret-logo.png'
import styles from './style.module.css'

const CardMobile = () => {
    return (
        <div>
            <div className={styles.media}>
                <Image
                    className={styles.image}
                    src={imagen}
                    alt={'img-xcaret'}/>
                <Image
                    className={styles.logo}
                    src={logo}
                    alt={'logo-xcaret'}/>
            </div>
            <div className={styles.cont}>
                <h1
                className={styles.title}
                >HOTEL XCARET MÉXICO</h1>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.
                </p>
                <button
                className={styles.button}
                >!RESERVA AHORA</button>
            </div>
        </div>
    );
};

export default CardMobile;
