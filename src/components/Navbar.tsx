import React from 'react'
import SignInButton from './SignInButton'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full fixed bg-transparent z-20'>
            <div className='wrapper flex items-center justify-between'>
                <div className='flex items-end gap-1 text-gray-50'>
                    <Link href="/" className='text-2xl font-semibold tracking-wide'>NestJS</Link>
                    <span className='text-md'>&
                        <span className='-tracking-wider'>NextJSAuth</span>
                    </span>
                </div>

                <div className='flex items-center gap-2'>
                    <SignInButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar