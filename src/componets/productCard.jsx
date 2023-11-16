import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { products } from "./Products";

export function ProductCard(products) {
    return (
        <Card className="mb-20 w-80">
            <CardHeader shadow={false} floated={false} className="h-20">
                <img
                    src={products.image}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography className="font-medium font-kalam text-black text-xl">
                        {products.name}
                    </Typography>
                    <Typography className="font-medium font-kalam text-black text-xl">
                        {products.price}
                    </Typography>
                </div>
                <Typography
                    color="black"
                    className="font-normal opacity-60 font-kalam"
                >
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    ripple={false}
                    size="lg"
                    fullWidth={true}
                    className="bg-orange-700 font-kalam text-base text-white shadow-none hover:scale-105 hover:shadow-none active:scale-100"
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

