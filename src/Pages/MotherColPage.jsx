import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'


function MotherColPage() {
    return (
        <div className='bg-b2 w-full h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div>
                <h1 className='text-5xl text-center pb-3'>
                    Signiture Colonies
                </h1>
                <p className='text-lg text-center'>
                    Here is a collection of my longtime favorite colonies currently in my display tank
                </p>
                <p className='text-lg text-center'>
                    If you see something you like, don't hesitate to reach out
                </p>
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default MotherColPage