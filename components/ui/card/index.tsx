import React, {FC} from 'react';
import Image from "next/image";
import logo from '../../images/Xcaret-logo.png'
import styles from './style.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleModal} from "../../../store/slices";
import {ICardNeeds} from "../data/data";
import ModalUi from "../modal-ui";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import pool from '../../images/alberca.jpg'
import sxcaret from '../../images/sostenibilidad.jpg'
import xcaret from '../../images/xcaretarte.jpg'


const CardXcaret: FC<ICardNeeds> = ({isImageLeft, text, title, subText}) => {
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
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <div
            className={styles.main}
        >
            <div
                style={{flexDirection: isImageLeft ? 'initial' : 'row-reverse'}}
                className={styles.cont}>
                <div>
                    <Carousel
                        className={styles.carousel}
                        infinite={true}
                        keyBoardControl={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-2-px"
                        arrows={false}
                        autoPlay
                        autoPlaySpeed={5000}
                        responsive={responsive}>
                        <Image
                            src={xcaret}
                            alt={'img'}
                            className={styles.imgCar}
                        />
                        <Image
                            src={pool}
                            alt={'img'}
                            className={styles.imgCar}
                        />
                        <Image
                            src={sxcaret}
                            alt={'img'}
                            className={styles.imgCar}
                        />
                    </Carousel>
                </div>
                <div className={styles.info}>
                    <Image
                        src={logo}
                        alt={'logo'}
                        className={styles.logo}
                    />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.text}>{subText}</p>
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

export default CardXcaret;
