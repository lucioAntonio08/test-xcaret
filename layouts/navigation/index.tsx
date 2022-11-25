import React, {FC} from 'react';
import {NavigationProps} from "../../interfaces";
import {NavbarUi} from "../../components";
import CardXcaret from "../../components/ui/card";
import BannerXcaret from "../../components/ui/banner";
import FooterXcaret from "../../components/ui/footer";
import {dataCards} from "../../components/ui/data/data";

export const NavigationLayout: FC<NavigationProps> = () => {
    return (
        <>
            <NavbarUi/>
            <BannerXcaret/>
            {
                dataCards.map((card, index) =>(
                    <div
                        key={index}
                    >
                        <CardXcaret
                            title={card.title}
                            text={card.text}
                            subText={card.subText}
                            isImageLeft={card.isImageLeft}
                        />
                    </div>

                ))
            }
            <FooterXcaret/>
        </>
    );
};
