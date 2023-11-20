import React from 'react'
import { useState } from 'react'
import { LoginCard } from '../componets/LoginCard'
import { RegisterCard } from '../componets/RegisterCard';
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu';
import { SimpleFooter } from '../componets/Footer';


function LoginPage() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div className='bg-b2 w-full h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            {
                currentForm === "login" ? <LoginCard onFormSwitch={toggleForm} /> : <RegisterCard onFormSwitch={toggleForm} />
            }

            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default LoginPage