import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'
import { ProductCard } from '../componets/productCard'


function LpsPage() {
    return (
        <div className='bg-b2 w-full h-full'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className='text-center text-5xl pb-28 mt-20 w-1/2 mx-auto'>
                <h1 className='pb-3'>
                    LPS Corals
                </h1>
                <p className='text-xl pb-3'>
                    I Mainly only keep Gonipora and Euphyllia. All corals are WYSIWYG and are hand picked straight from my display tank.
                </p>
                <p className='text-xl'>
                    They are healthy and ready for your tank!
                </p>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-20'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div >
    )
}

export default LpsPage