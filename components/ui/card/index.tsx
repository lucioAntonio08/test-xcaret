import React, {FC} from 'react';
import Image from "next/image";
import xcaret from '../../images/xcaret-footer.jpg'
import logo from '../../images/Xcaret-logo.png'
import styles from './style.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleMenu, toggleModal} from "../../../store/slices";
import {Alert, Modal} from "@mantine/core";
import {Button} from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
interface ICardNeeds {
    title: string,
    text: string,
    subText: string
    isImageLeft?: boolean
}
const CardXcaret: FC<ICardNeeds> = ({isImageLeft,text,title,subText}) => {
    const dispatch = useAppDispatch()
    const {isModalOpen} = useAppSelector(state => state.ui)
    const handleOpen = () =>{
        dispatch( toggleModal(!isModalOpen))
    }
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
                    <button
                        onClick={handleOpen}
                        className={styles.btn}>¡RESERVA AHORA!</button>
                    <Modal
                        opened={isModalOpen}
                        onClose={handleOpen}
                    >
                        Resumen de compra
                        <Button>Continuar</Button>
                        <Alert
                            icon={<CheckCircleOutlinedIcon fontSize="medium"/>}
                            title="succses"
                            color="green"
                            variant="outline"
                        >
                        </Alert>
                    </Modal>

                </div>
            </div>
        </div>
    );
};

export default CardXcaret;
