import React, {FC} from 'react';
import {NavigationProps} from "../../interfaces";
import {Navbar, Sidenav} from "../../components";
import FooterXcaret from "../../components/ui/footer";

export const NavigationLayout:FC<NavigationProps> = () => {
    return (
        <nav>
            <Navbar />
            <Sidenav />
            <FooterXcaret/>
        </nav>
    );
};
