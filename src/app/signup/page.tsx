import InputSignUp from '@/components/InputSignUp'
import { Meteors } from '@/components/Meteor'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import React from 'react'
import { IoChevronBack } from 'react-icons/io5'

const page = () => {
    return (
        <section className='min-h-screen w-full flex items-center justify-center bg-[#000000]'>
            <div className='wrapper flex flex-col items-center justify-center w-full gap-4'>
                <div className='w-full max-w-[550px]'>
                    <Link href="/" className='text-gray-50 flex items-center gap-2 group hover:text-gray-400 transition-all !duration-300 w-max'>
                        <IoChevronBack className='w-5 h-5 text-gray-50 group-hover:text-gray-400 transition-all !duration-300' />
                        Go back
                    </Link>
                </div>
                <div className='bg-gray-50 border flex flex-col items-center gap-10 px-6 py-6 rounded-[24px] w-full max-w-[550px] relative overflow-hidden'>
                    <h1 className='font-semibold text-[28px] text-gray-900 z-10'>
                        SignUp.
                    </h1>

                    <div className='flex flex-col items-center gap-4 w-full relative'>
                        <InputSignUp />
                    </div>

                    <Meteors number={20} />
                </div>
            </div>
        </section>
    )
}

export default page