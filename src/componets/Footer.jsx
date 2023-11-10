import React from 'react'

import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center md:justify-center">
            <Typography color="blue-gray" className="font-normal text-sm font-kalam">
                &copy; 2023 Thunder Corals
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-3">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-kalam font-normal text-sm transition-colors hover:text-orange-700 hover:underline "
                    >
                        Refund Policy
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-kalam font-normal text-sm transition-colors hover:text-orange-700 hover:underline"
                    >
                        Privacy Policy
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-kalam font-normal text-sm transition-colors hover:text-orange-700 hover:underline"
                    >
                        Terms of Service
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-kalam font-normal text-sm transition-colors hover:text-orange-700 hover:underline"
                    >
                        Shipping Policy
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-kalam font-normal text-sm transition-colors hover:text-orange-700 hover:underline"
                    >
                        Contact Information
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}