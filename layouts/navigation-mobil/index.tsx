import React from 'react';
import {Navbar} from "../../components";
import BannerXcaret from "../../components/ui/banner";
import CardMobile from "../../components/ui/card-mobil";
import FooterXcaret from "../../components/ui/footer";
import ThankYou from "../../components/ui/thank-you";

const NavigationMobil = () => {
    return (
        <>
            <Navbar/>
            <BannerXcaret/>
                <CardMobile/>
                <CardMobile/>
                <CardMobile/>
            <FooterXcaret/>
            <ThankYou/>
        </>
    );
};

export default NavigationMobil;
