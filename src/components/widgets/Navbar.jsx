import React from 'react';
import Text from '../elements/Text';
import Button from '../elements/Button';
import {  signOut } from "firebase/auth";
import {auth} from '../../firebase';

const Navbar = () => {

    const handleLogout = () => {
                

        signOut(auth).then(() => {
            console.log("Signed out successfully")
        }).catch((error) => {
        });

    }
    
    return(
        <>
            <nav className="flex justify-between pt-8">
                <Text className="text-white font-bold text-xl">
                </Text>

                <Button onClick={handleLogout} className=" py-2 px-12">
                    Logout
                </Button>
            </nav>
        </>
    )
}

export default Navbar;