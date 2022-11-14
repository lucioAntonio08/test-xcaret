import React, {FC} from 'react';
import {NavigationProps} from "../../interfaces";
import {Navbar, Sidenav} from "../../components";
import FooterXcaret from "../../components/ui/footer";
import CardXcaret from "../../components/ui/card";

export const NavigationLayout: FC<NavigationProps> = () => {
    return (
        <nav>
            <Navbar/>
            <Sidenav/>
            <FooterXcaret/>
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
        </nav>
    );
};
