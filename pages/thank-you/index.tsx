import React from 'react';
import Image from "next/image";
import styles from'./style.module.css'
import logo from '../../components/images/hotel-xcaret.png'
import logos from '../../components/images/experiencias-xcaret.png'
import {useRouter} from "next/router";

const ThankYou = () => {
    const router = useRouter()
    return (
        <div className={styles.main}>
            <Image
                className={styles.media}
                src={logo}
                alt={'Xcaret logo'}/>

            <h1 className={styles.text}>
                Thanks for your preference. Here are more things we can do for you
            </h1>
            <h1
            className={styles.text}
            >Gracias por tu preferencia. Aquí hay más cosas que podemos hacer por ti
            </h1>
            <h1
                className={styles.text}
            >
                Xcaret experiences
            </h1>
            <Image src={logos} alt={'experiences'}/>
            <button
            className={styles.home}
            onClick={()=>router.push('/')}
            >
                Home
            </button>
        </div>
    );
};

export default ThankYou;
