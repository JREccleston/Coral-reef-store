import React from 'react'

import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SimpleFooter() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center md:justify-center">
            <Typography color="blue-gray" className="font-normal text-sm font-kalam">
                &copy; 2023 Thunder Corals
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-3">
                <li className="font-kalam font-light text-sm transition-colors hover:text-orange-700 hover:underline ">
                    <Link to='/RefundPolicy'>Refund Policy</Link>
                </li>
                <li className="font-kalam font-light text-sm transition-colors hover:text-orange-700 hover:underline ">
                    <Link to='/PrivacyPolicy'>Privacy Policy</Link>
                </li>
                <li className="font-kalam font-light text-sm transition-colors hover:text-orange-700 hover:underline ">
                    <Link to='/TermsOfService'>Terms of Service</Link>
                </li>
                <li className="font-kalam font-light text-sm transition-colors hover:text-orange-700 hover:underline ">
                    <Link to='/ShippingPolicy'>Shipping Policy</Link>
                </li>
                <li className="font-kalam font-light text-sm transition-colors hover:text-orange-700 hover:underline ">
                    <Link to='/ContactInformation'>Contact Information</Link>
                </li>
            </ul>
        </footer>
    );
}



