import React from 'react';
import styles from './styles.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Select} from "@mantine/core";

const FooterXcaret = () => {

    return (
        <div>
            <div className={styles.politics}>
                <p>
                    <b>10 % de descuento en tarifas vigentes de Hotel Xcaret Arte.</b>
                    <br/>
                    Los descuentos de compra anticipada
                    pueden variar dependiendo de la fecha de reserva y la fecha de estadía. Periodo para reservar:
                    Del 02 al 16 de mayo de 2022. Periodo para viajar: del 12 de julio al 16 de agosto del 2022.
                    Sujeto a disponibilidad.
                </p>
                <p>
                    <b>Políticas de cancelación:</b>
                    <br/> Cambios y cancelaciones de acuerdo
                    a políticas establecidas antes de las 15:00 hrs hora local del día de llegada.
                    Penalidad: 100% de la estancia
                </p>
                <p>
                    <b>Restricciones:</b>
                    <br/>
                    No aplica con otras promociones.
                    Tarifa sujeta a cambios sin previo aviso.
                </p>
            </div>
            <div>
                <div className={styles.contact}>
                    <p>
                        <b>ATENCIÓN A CLIENTES</b>
                        <br/>
                        reservaciones@hotelxcaret.com
                    </p>
                    <div>
                        <FacebookOutlinedIcon fontSize={"large"}/>
                        <InstagramIcon fontSize={"large"}/>
                        <TwitterIcon fontSize={"large"}/>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.phone} >
                        <p>mexico</p>
                        <p>Canada-Eua</p>

                    <Select
                        placeholder='Resto del mundo'
                        data={[
                            {value: 'Brasil', label: 'Brasil'},
                            {value: 'Argentina', label: 'Argentina'},
                            {value: 'Colombia', label: 'Colombia'},
                            {value: 'España', label: 'España'},
                            {value: 'Chile', label: 'Chile'}
                        ]}
                    >
                    </Select>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V.</p>
                <div className={styles.terms}>
                    <p>Terminos de Uso</p>
                    <p>Aviso de privacidad</p>
                </div>
            </div>
        </div>
    );
};

export default FooterXcaret;
