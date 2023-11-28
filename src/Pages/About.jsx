import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'

function About() {
    return (
        <div className='bg-b2 w-full h-screen xs:h-full'>
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className=" mx-auto h-auto text-center w-1/2 ms:w-3/4">
                <h1 className='pb-10 text-5xl text-center ms:text-6xl'>
                    Just another hobbiest...
                </h1>
                <p className='text-xl ms:text-2xl justify-start'>
                    Just like anybody else, after being in this hobby for a few years I have found myself fragging overgrown colonies and not knowing what to do with them.
                </p>
                <p className='text-xl ms:text-2xl pb-4 justify-start'>
                    I was not exactly interested in getting pennies on the dollar from the lfs for a prized torch coral frag..... so here we are.
                </p>
                <p className='text-xl ms:text-2xl'>
                    Everything that I sell comes straight from my display tank. I will only sell super healthy clean frags that have been in my care for a long time.
                </p>


            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default About