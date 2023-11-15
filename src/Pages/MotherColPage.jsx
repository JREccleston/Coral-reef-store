import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'


function MotherColPage() {
    return (
        <div className='bg-b2 w-full h-screen'>
            <div>
                <NavbarWithMegaMenu />
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default MotherColPage