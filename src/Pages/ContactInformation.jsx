import React from 'react'
import { NavbarWithMegaMenu } from '../componets/NavBarWithMegaMenu'

function ContactInformation() {
    return (
        <div className='bg-b2 w-full h-screen flex flex-row items-center justify-center' >
            <div className='pb-40'>
                <NavbarWithMegaMenu />
            </div>
            <div className='flex flex-col mt-20 gap-y-10 pb-0 pl-10'>
                <div className='rounded-3xl w-72 h-56 text-center mx-auto bg-b1 border-orange-700 border-4'>
                    <h1 className='text-2xl py-8'>
                        Call or Text
                    </h1>
                </div>
                <div className='rounded-3xl w-72 h-56 text-center mx-auto bg-b1 border-orange-700 border-4'>
                    <h1 className='text-2xl py-8'>
                        Call or Text
                    </h1>
                </div>
            </div>
            <form action="#" className="space-y-8 w-1/2 text-center mx-auto ">
                <div>
                    <label for="email" class="block mb-2 text-xl text-black ">Your Email</label>
                    <input type="email" id="email" class="shadow-sm font-sans bg-gray-50 border border-gray-300 text-black  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " placeholder="name@email.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-xl text-black ">Subject</label>
                    <input type="text" id="subject" class="font-sans block p-3 w-full text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" className="block mb-2 text-xl text-black ">Your Message</label>
                    <textarea id="message" rows="6" class="font-sans block p-2.5 w-full text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-base text-center text-black rounded-lg bg-b1 sm:w-fit hover:bg-orange-700">Send Message</button>
            </form>

        </div>
    )
}

export default ContactInformation