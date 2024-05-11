"use client"

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoLockOpen } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TiUser } from 'react-icons/ti';

const InputSignUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <Input
                isRequired
                variant='underlined'
                className='select-none'
                label='Name'
                size="lg"
                placeholder='Kimi no nawa'
                startContent={<TiUser className='w-6 h-6 text-gray-500' />} />
            <Input
                isRequired
                type='email'
                className='select-none'
                variant='underlined'
                label='Email'
                size='lg'
                placeholder='aduhmamae@gmail.com'
                startContent={<MdEmail className='w-6 h-6 text-gray-500' />} />
            <Input
                isRequired
                variant='underlined'
                label='Password'
                className='select-none'
                size='lg'
                placeholder='Enter your password'
                endContent={
                    <button onClick={toggleVisibility}>
                        {!isVisible ? (
                            <FaEye className='w-6 h-6 text-gray-500' />
                        ) : (
                            <FaEyeSlash className='w-6 h-6 text-gray-500' />
                        )}
                    </button>
                }
                startContent={<IoLockOpen className='w-6 h-6 text-gray-500' />}
                type={isVisible ? "text" : "password"} />

            <p className='text-[16px] text-gray-500 text-center'>
                By signing up, you agree to our {" "}
                <span className='text-blue-700 hover:cursor-pointer'>
                    Terms & Privacy Policy.
                </span>
            </p>

            <div className='w-full flex items-center justify-center group select-none'>
                <Button className='w-full bg-[#000000] text-gray-50 z-10 hover:!opacity-100' size='lg' type='submit'>
                    Sign up
                </Button>
                <div className='w-full max-w-[150px] h-[30px] bottom-0 absolute bg-black translate-y-1 rounded-full group-hover:max-w-[200px] transition-all !duration-500' />
            </div>
        </>
    )
}

export default InputSignUp