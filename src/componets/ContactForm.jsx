import React from 'react'

function ContactForm() {
    return (
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
    )
}

export default ContactForm