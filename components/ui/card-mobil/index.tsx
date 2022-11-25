import React from 'react';
import Image from "next/image";
import logo from '../../images/Xcaret-logo.png'
import ModalUi from "../modal-ui";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleModal} from "../../../store/slices";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import xcaret from "../../../components/images/xcaretarte.jpg";
import pool from "../../../components/images/alberca.jpg";
import sxcaret from "../../../components/images/sostenibilidad.jpg";
import styles from './style.module.css'

const CardMobile = () => {
    const dispatch = useAppDispatch()
    const {isModalOpen} = useAppSelector(state => state.ui)
    const handleOpen = () => {
        dispatch(toggleModal(!isModalOpen))
    }
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 900},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 600},
            items: 2
        },
        mobile: {
            breakpoint: {max: 564, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div className={styles.main}>
            <div>
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        arrows={false}
                        autoPlay
                        autoPlaySpeed={5000}
                    >
                        <Image
                            className={styles.imgCar}
                            src={pool}
                            alt={'pool'}/>
                        <Image
                            className={styles.imgCar}
                            src={sxcaret}
                            alt={'Hotel'}/>
                        <Image
                            className={styles.imgCar}
                            src={xcaret}
                            alt={'Xcaret'}/>
                    </Carousel>

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
                        onClick={handleOpen}
                        className={styles.btn}>¡RESERVA AHORA!
                    </button>
                    <ModalUi
                        isOpen={isModalOpen}
                    />
                </div>

            </div>
        </div>
    );
};

export default CardMobile;
