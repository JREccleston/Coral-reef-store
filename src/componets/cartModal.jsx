
'use client';

import { Modal } from 'flowbite-react';
import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { UilShoppingCart } from '@iconscout/react-unicons'

export function Component() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button
                variant="text"
                className="font-kalam relative inline-flex items-center justify-center mr-0 p-2 overflow-hidden text-lg font-normal
                 text-black rounded-lg hover:bg-orange-700"
                onClick={() => setOpenModal(true)}><UilShoppingCart /></Button >
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header className='bg-sky100 border-none '><h1 className='text-3xl'>Shopping Cart</h1></Modal.Header>
                <Modal.Body className='bg-sky100 shadow-none'>
                    <div className="space-y-6 bg-sky100 border-none">
                        <p className="text-lg leading-relaxed text-black">

                        </p>
                        <p className="text-lg leading-relaxed text-black ">

                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-sky100 border-none'>
                    <div className='flex flex-row gap-x-4'>
                        <Button className="rounded-full bg-orange-700  font-sans hover:scale-110 text-white" onClick={() => setOpenModal(false)}>Continue Shopping </Button>
                        <Button className="rounded-full bg-orange-700 font-sans hover:scale-110 text-white" onClick={() => setOpenModal(false)}>
                            Checkout
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
