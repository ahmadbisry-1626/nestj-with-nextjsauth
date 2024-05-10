import React from 'react'
import { ButtonKeren } from './ui/ButtonKeren'

const Navbar = () => {
    return (
        <nav className='w-full fixed bg-[#000000] z-20'>
            <div className='wrapper flex items-center justify-between'>
                <div className='flex items-end gap-1 text-gray-50'>
                    <h1 className='text-2xl font-semibold tracking-wide'>NestJS</h1>
                    <span className='text-md'>& NextJSAuth</span>
                </div>

                <div className='flex items-center gap-2'>
                    <ButtonKeren>
                        Sign in
                    </ButtonKeren>
                    <ButtonKeren>
                        Sign up
                    </ButtonKeren>
                </div>
            </div>
        </nav>
    )
}

export default Navbar