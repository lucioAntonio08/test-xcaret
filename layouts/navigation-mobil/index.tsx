import React from 'react';
import {NavbarUi} from "../../components";
import BannerXcaret from "../../components/ui/banner";
import CardMobile from "../../components/ui/card-mobil";
import FooterXcaret from "../../components/ui/footer";

const NavigationMobil = () => {
    return (
        <>
            <NavbarUi/>
            <BannerXcaret/>
                <CardMobile/>
                <CardMobile/>
                <CardMobile/>
            <FooterXcaret/>
        </>
    );
};

export default NavigationMobil;
