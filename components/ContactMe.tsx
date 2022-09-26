import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

type Props = {}

export default function ContactMe({ }: Props) {
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-center md:flex-row
        md:text-left max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have what you need.{" "}
                    <span className='underline decoration-[#f7ab0a]/50'>Let's Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+234567</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>me@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Gran Vía, 42, Madrid</p>
                    </div>

                </div>

            </div>
        </div>
    )
}