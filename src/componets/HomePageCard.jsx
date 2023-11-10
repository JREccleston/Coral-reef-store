import React from 'react'


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export function HomePageCard({ species, coralType }) {
    return (
        <Card className="mt-6 w-96 bg-sky100">
            <CardHeader className="relative h-56">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
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