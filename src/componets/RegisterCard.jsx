import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input
} from "@material-tailwind/react";
import { useState } from "react";
import React from "react";



export function RegisterCard(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }
    return (

        <Card className="w-96 text-center mx-auto mt-20 bg-sky100 font-kalam">
            <CardHeader
                className="mb-4 grid h-20"
            >
                <Typography variant="h2" color="white" className="bg-orange-700 h-full w-full text-center items-center justify-center flex text-black font-kalam">
                    Register
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-10">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Input type="name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} label="Full Name" size="lg" id="name" name="name" className="pb-3 text-xl" color="orange" />
                    </div>
                    <div className="mb-4">
                        <Input type="email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" size="lg" id="email" name="email" color="orange" className="text-xl" />
                    </div>
                    <div className="mb-2">
                        <Input type='password' variant="standard" value={pass} onChange={(e) => setPass(e.target.value)} label="Password" size="lg" id="password" name="password" color="orange" className="text-xl" />
                    </div>
                    <button className="w-full bg-orange-700 p-2 mt-4 text-black rounded-3xl text-lg">
                        Register
                    </button>
                </form>
                <button onClick={() => props.onFormSwitch('login')}>Already have an account? <span className="font-bold">Login here.</span> </button>
            </CardBody>
        </Card >

    );
}