import React, {FC, useEffect, useState} from 'react';
import {Modal,Text} from "@mantine/core";
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleModal} from "../../../store/slices";
import styles from './style.module.css'
import {useRouter} from "next/router";


interface ModalProps {
    isOpen: boolean
    isClose?: boolean
}
const getIdRandom = async():Promise<number> =>{
    const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    const numberString = await res.text();
    return +numberString;
}

const ModalUi: FC<ModalProps> = ({isOpen, isClose}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [id, setId] = useState<number>()
    const {isModalOpen} = useAppSelector(state => state.ui)
    const handleOpen = () => {
        dispatch(toggleModal(!isModalOpen))
    }
    useEffect(()=>{
        getIdRandom().then(id => setId(id))
    },[])
    return (
        <div>
            <Modal
                opened={isOpen}
                onClose={handleOpen}
                overlayOpacity={0.10}
                size={'lg'}
            >
                <div>
                    <Text size={"xs"}>
                        <h1 className={styles.tittle}>Reservacion</h1>
                        <h1 className={styles.tittle}>Codigo de Reserva: {id}</h1>
                        <b>Hotel Xcaret Mexico</b><br/>
                        2 Noches(s)<br/>
                        Llegada jueves, Enero 24, 2022 / Salida sábado, Enero 26, 2022<br/>
                        1 Habitacion(es)   2 Adulto(s)<br/>
                        <b>¡Has reservado unas vacaciones All-Fun Inclusive en Hotel Xcaret México!</b><br/>
                        Prepárate para disfrutar los siguientes beneficios ya incluidos en tu reservación <b>:</b><br/>
                        -Acceso ilimitado a todos los parques de Grupo Xcaret<br/>
                        -Experiencias culinarias a cargo del Colectivo Gastronómico de Hoteles Xcaret conformado por
                        celebrity chefs<br/>
                        <b>HABITACIÓN 1</b><br/>
                        <div className={styles.text}>
                            <Text>Suite River  2 Adulto(s)
                            </Text>
                            <Text> TOTAL:   $1,872.00  USD
                            </Text>
                        </div>
                    </Text>
                </div>
                <div className={styles.boxButton}>
                    <Button
                    onClick={()=>router.push('/thank-you')}
                    >Continuar</Button>
                </div>
            </Modal>
        </div>
    );
};

export default ModalUi;
