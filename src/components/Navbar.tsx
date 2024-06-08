'use client'
import React, { useState } from 'react';

type Props ={}

const Navbar = (props:Props) => {
    const [showProfile, setShowProfile]= useState<boolean>(false)
    const [showNav, setShowNav]= useState<boolean>(false)
    return (
        <div>
            Navbar
        </div>
    );
};

export default Navbar;