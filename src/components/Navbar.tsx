import React from 'react'
import { ButtonKeren } from './ui/ButtonKeren'
import { Button } from '@nextui-org/button'

const Navbar = () => {
    return (
        <nav className='w-full fixed bg-transparent z-20'>
            <div className='wrapper flex items-center justify-between'>
                <div className='flex items-end gap-1 text-gray-50'>
                    <h1 className='text-2xl font-semibold tracking-wide'>NestJS</h1>
                    <span className='text-md'>& NextJSAuth</span>
                </div>

                <div className='flex items-center gap-2'>
                    <Button variant='light' className='text-gray-50 rounded-full h-[45px] w-[90px]'>
                        Sign in
                    </Button>
                    <ButtonKeren>
                        Sign up
                    </ButtonKeren>
                </div>
            </div>
        </nav>
    )
}

export default Navbar