import React from 'react'


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export function HomePageCard({ species, coralType, coralImg }) {
    return (
        <Card className="mt-8 w-96 bg-sky100 pr-0">
            <CardHeader className="relative h-56 flex flex-row items-center justify-center">
                <img
                    className="rounded-3xl"
                    src={coralImg}
                    alt="Coral-image"
                />
            </CardHeader>
            <CardBody className='bg-sky100'>
                <Typography variant="h5" className="mb-2 text-black">
                    UI/UX Review Check
                </Typography>
                <Typography className='font-Nuecha text-black'>
                    {species}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button className="rounded-full bg-orange-700 w-36 flex flex-row items-center justify-center m-auto">Shop {coralType}</Button>
            </CardFooter>
        </Card>
    );
}