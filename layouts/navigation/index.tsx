import React, {FC} from 'react';
import {NavigationProps} from "../../interfaces";
import {Navbar} from "../../components";
import CardXcaret from "../../components/ui/card";
import BannerXcaret from "../../components/ui/banner";
import FooterXcaret from "../../components/ui/footer";
import ThankYou from "../../components/ui/thank-you";

export const NavigationLayout: FC<NavigationProps> = () => {
    return (
        <>
            <Navbar/>
            <BannerXcaret/>
                <CardXcaret
                    title={"HOTEL XCARET MÉXICO"}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. '}
                    subText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.'}
                />
                <CardXcaret
                    title={"HOTEL XCARET MÉXICO"}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. '}
                    subText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.'}
                    isImageLeft={true}
                />
            <FooterXcaret/>
            <ThankYou/>
        </>
    );
};
