import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


export function HomePageCard({ species, coralType, coralImg, coralCategory, productPage }) {
    return (
        <Card className="lg:mt-8 xs:mt-10 lg:w-96 xs:w-80 ms:w-6/12 ms:mt-10 bs:w-6/12 bs:mt-10 bg-sky100 lg:pr-0">
            <CardHeader className="relative h-56 flex flex-row items-center justify-center">
                <img
                    className="rounded-3xl"
                    src={coralImg}
                    alt="Coral"
                />
            </CardHeader>
            <CardBody className='bg-sky100'>
                <Typography variant="h5" className="mb-2 text-black font-kalam">
                    {coralCategory}
                </Typography>
                <Typography className='font-kalam font-medium text-black text-lg'>
                    {species}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button a className="rounded-full bg-orange-700 w-36 flex flex-row items-center justify-center m-auto ms:w-44 bs:w-44"><Link to={productPage}>Shop {coralType}</Link></Button>
            </CardFooter>
        </Card>
    );
}