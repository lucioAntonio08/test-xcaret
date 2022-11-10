import React, {FC} from 'react';
import {NavigationProps} from "../../interfaces";
import {Navbar, Sidenav} from "../../components";

export const NavigationLayout:FC<NavigationProps> = () => {
    return (
        <nav>
            <Navbar />
            <Sidenav />
        </nav>
    );
};
