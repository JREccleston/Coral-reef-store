import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'

import { spsProductContainer } from '../componets/SpsProducts'

function SpsPage() {
    return (
        <div className='bg-b2 w-full h-full ms:h-screen'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className='text-center text-5xl pb-24 mt-10 w-1/2 mx-auto ms:w-3/4 ms:text-6xl xs:w-3/4'>
                <h1 className='pb-3'>
                    SPS Corals
                </h1>
                <p className='text-xl pb-3 ms:text-2xl ms:pb-4'>
                    Selection is mainly Acropora. All corals are WYSIWYG and are hand picked straight from my display tank.
                </p>
                <p className='text-xl ms:text-2xl'>
                    Frags are healthy and ready for your tank!
                </p>
            </div>
            <div>

            </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-x-24 gap-y-20 pb-20' dangerouslySetInnerHTML={{ __html: spsProductContainer }}>

            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div >
    )
}

export default SpsPage