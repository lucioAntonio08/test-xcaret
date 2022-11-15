import React from 'react';
import {Alert} from "@mantine/core";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Image from "next/image";
import logo from "../../images/hotel-xcaret.png"
import experiences from '../../images/experiencias-xcaret.png'
import styles from'./style.module.css'

const ThankYou = () => {
    return (
        <div className={styles.main}>
            <Image
                className={styles.media}
                src={logo} alt={'Xcaret logo'}/>

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
            <Image src={experiences} alt={'experiences'}/>
        </div>
    );
};

export default ThankYou;
