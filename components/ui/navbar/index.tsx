import React from 'react';
import {Burger} from "@mantine/core";

export const Navbar = () => {
    //Todo redux implementations
    return (
        <div>
            Navbar

            <Burger
                opened={true}
                color='#ffffff'
                // onClick={}
            />
        </div>
    );
};
