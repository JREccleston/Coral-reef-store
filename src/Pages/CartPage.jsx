import React from 'react'
import { SimpleFooter } from '../componets/Footer'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'

function CartPage() {
    return (
        <div className='bg-b2 w-full h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default CartPage