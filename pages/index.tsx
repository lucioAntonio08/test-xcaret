import styles from '../styles/Home.module.css'
import {NavigationLayout} from "../layouts";
import NavigationMobil from "../layouts/navigation-mobil";
import {BrowserView, MobileView} from "react-device-detect"


export default function Home() {
    return (
        <div className={styles.container}>
            <BrowserView>
                <NavigationLayout/>
            </BrowserView>

            <MobileView>
                <NavigationMobil/>
            </MobileView>
            {/*//TODO CARTA DE PRESENTACION*/}
        </div>
    )
}
