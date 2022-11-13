import React, {useState} from 'react';
import {Burger} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleMenu} from "../../../store/slices";
import styles from "./styles.module.css"

export const Navbar = () => {
    //Todo redux implementations
    const {isMenuOpen} = useAppSelector(state => state.ui)
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={title}
                />
                <h1>Hoteles Xcaret</h1>
            </div>
            <div className={styles.contact}>
                <h5>Contacto</h5>
                <h5>En</h5>
                <h5>MXN</h5>
            </div>
        </div>
    );
};
