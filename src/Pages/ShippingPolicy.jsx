import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'

function ShippingPolicy() {
    return (
        <div className='bg-b2 w-full h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className='text-center mx-auto font-sans w-1/2'>
                <h1 className='text-6xl pb-10'>
                    Shipping
                </h1>
                <p className='text-lg pb-4'>
                    All orders over $299 will receive free shipping.
                </p>
                <p className='text-lg'>
                    For orders under $299, a $50 shipping fee will be added to your order.
                </p>
                <p className='text-lg pb-4'>
                    Alive arrival is guaranteed. In the case of a dead on arrival, an email with pictures must be sent within 2 hours of delivery for a credit.
                </p>
                <p className='text-lg'>
                    On rare occasions there may me a shipping mishap by the carrier that may cause delays with the delivery of your package.
                    This is completely out of our control and we are not responsible for any DOA’s caused by the delay.

                </p>
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default ShippingPolicy