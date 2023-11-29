import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input
} from "@material-tailwind/react";
import { useState, useRef, useEffect } from "react";
import React from "react";


export function LoginCard(props) {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [email, pass])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
        setEmail('');
        setPass('');
        setSuccess(true);
    }
    return (
        <>
            {success ? (
                <section>
                    <h1>
                        You are logged in!
                    </h1>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                        {errMsg}
                    </p>
                    <Card className="w-96 text-center mx-auto mt-20 bg-sky100 font-kalam xs:pb-10 ms:mt-40">
                        <CardHeader
                            className="mb-4 grid h-20 place-items-center"
                        >
                            <Typography variant="h2" color="white" className="bg-orange-700 h-full w-full text-center items-center justify-center flex text-black font-kalam">
                                Log In
                            </Typography>
                        </CardHeader>
                        <CardBody className="flex flex-col gap-10">
                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">
                                    <Input type="email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" size="lg" id="email" name="email" className="text-xl" color="orange" ref={emailRef} required />
                                </div>
                                <div className="mb-2">
                                    <Input type='password' variant="standard" value={pass} onChange={(e) => setPass(e.target.value)} label="Password" size="lg" id="password" name="password" className="text-xl" color="orange" required />
                                </div>
                                <button className="w-full bg-orange-700 p-2 mt-4 text-black rounded-3xl text-lg">
                                    Log In
                                </button>
                            </form>
                            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? <span className="font-bold">Register here.</span> </button>
                        </CardBody>
                    </Card >
                </section>
            )}
        </>
    );
}