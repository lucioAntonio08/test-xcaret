import React, {useCallback, useEffect, useState} from 'react';
import {Burger, Drawer} from "@mantine/core";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleMenu} from "../../../store/slices";
import styles from "./styles.module.css"
import {Sidenav} from "../sidenav";
import Image from "next/image";
import logo from '../../images/hoteles-logos.png'


export const NavbarUi = () => {
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
                <div>
                    <Image
                        className={styles.logo}
                        src={logo} alt={'logo'}
                    />
                </div>
            </div>
            <div className={styles.contact}>
                <h5>Contacto</h5>
                <select className={styles.select}>
                    <option >es</option>
                    <option >en</option>
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
}
