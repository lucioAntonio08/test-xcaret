import React, {useState} from 'react';
import {Burger, Drawer} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleMenu} from "../../../store/slices";
import styles from "./styles.module.css"
import {Sidenav} from "../sidenav";

export const Navbar = () => {
    const {isMenuOpen} = useAppSelector(state => state.ui)
    const dispatch = useAppDispatch()
    const handleMenu =()=>{
        dispatch(toggleMenu(!isMenuOpen))
    }


    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Burger
                    opened={isMenuOpen}
                    onClick={handleMenu}
                />
                <h1>Hoteles Xcaret</h1>
            </div>
            <div className={styles.contact}>
                <h5>Contacto</h5>
                <select
                    className={styles.select}
                name='EN'
                >
                    <option value="value1" >ES</option>
                    <option value="value2" >EN</option>

                </select>
                <h5>MXN</h5>
            </div>
            <Drawer
                opened={isMenuOpen}
                onClose={handleMenu}
            >
                <Sidenav/>
            </Drawer>
        </div>
    );
};
