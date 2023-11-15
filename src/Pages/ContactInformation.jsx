import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'
import { SimpleFooter } from '../componets/Footer'

function ContactInformation() {
    return (
        <div className='bg-b2 w-full h-screen' >
            <div className='flex flex-row items-center justify-center'>
                <div>
                    <NavbarWithMegaMenu />
                </div>
                <div className='flex flex-col mt-12 gap-y-10 pb-0 pl-20 '>
                    <div className='rounded-3xl w-72 h-56 text-center mx-auto bg-b1 border-orange-700 border-4'>
                        <h1 className='text-3xl pt-4'>
                            Call or Text:
                        </h1>
                        <p className='pb-4 text-lg'>
                            (479)-282-8009
                        </p>
                        <h1 className='text-3xl pt-4'>
                            Email:
                        </h1>
                        <p className='text-lg'>
                            Thundercorals@gmail.com
                        </p>
                    </div>
                    <div className='rounded-3xl w-72 h-56 text-center mx-auto bg-b1 border-orange-700 border-4'>
                        <h1 className='text-2xl pt-16'>
                            Location:
                        </h1>
                        <p className='text-lg'>
                            Rogers, Arkansas 72758
                        </p>
                        <p className='text-lg'>
                            United States
                        </p>
                    </div>
                </div>
                <div class=" mt-24 py-8 lg:py-16 px-4 mx-auto w-1/2">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>


                    <form action="#" className="space-y-8 w-full text-center mx-auto ">
                        <div>

                            <label for="email" class="block mb-2 text-xl text-black ">Your Email</label>
                            <input type="email" id="email" class="shadow-lg font-sans bg-gray-100 border border-gray-300 text-black  rounded-lg  block w-full p-2.5  " placeholder="name@email.com" required />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-xl text-black ">Subject</label>
                            <input type="text" id="subject" class="font-sans block p-3 w-full text-black bg-gray-100 rounded-lg border border-gray-300 shadow-lg" placeholder="Let us know how we can help you" required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" className="block mb-2 text-xl text-black ">Your Message</label>
                            <textarea id="message" rows="4" class="font-sans block p-2.5 w-full text-black bg-gray-100 rounded-lg shadow-lg border border-gray-300" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="py-3 px-5 text-base text-center text-black rounded-lg bg-b1 sm:w-fit hover:bg-orange-700">Send Message</button>
                    </form>

                </div>
            </div>
            <div className="sticky top-[100vh]">
                <SimpleFooter />
            </div>
        </div>
    )
}

export default ContactInformation