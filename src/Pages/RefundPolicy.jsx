import React from 'react'
import { SimpleFooter } from '../componets/Footer'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'


function RefundPolicy() {
    return (
        <div className='bg-b2 w-full h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>

            <div className='text-center mx-auto w-1/2 h-auto xs:w-3/4 ms:w-3/4'>
                <h1 className='pb-10 text-5xl ms:text-6xl'>Refund Policy</h1>
                <p className="text-center mx-auto text-xl ms:text-2xl">
                    All sales are final. Cancellations will be dealt with on a situational basis.
                    We understand that emergencies can arise and will do our best to make it fair for both parties involved.
                </p>

                <p className="text-center mx-auto text-xl ms:text-2xl pt-4">
                    In situations where a shipment is not delivered, or if the corals arrive partially or entirely deceased upon delivery, Thunder Corals may opt to provide a refund. However, in most instances, a store credit will be offered instead.
                </p>


            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>

    )

}


export default RefundPolicy

