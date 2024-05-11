"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { ButtonKeren } from './ui/ButtonKeren'
import { usePathname } from 'next/navigation'

const SignInButton = () => {
    const { data: session } = useSession()
    const pathname = usePathname()

    return (
        <>
            {pathname === '/signup' ? (
                <div className='flex items-center gap-3'>
                    <Link href={"/api/auth/signin"} className='text-gray-50 rounded-full px-4 py-2 hover:bg-gray-700 transition duration-300'>
                        Sign In
                    </Link>
                </div>
            ) : (
                <>
                    {session && session.user ? (
                        <div className='flex items-center gap-4'>
                            <Link href={`/profile/${session.user.id}`} className='text-[18px] text-gray-300'>You logged in as {session?.user.name}</Link>
                            <span className='text-gray-300'>|</span>

                            <Link href={"/api/auth/signout"} className='text-red-500 font-medium hover:text-red-700'>
                                Sign out
                            </Link>
                        </div>
                    ) : (
                        <div className='flex items-center gap-3'>
                            <Link href={"/api/auth/signin"} className='text-gray-50 rounded-full px-4 py-2 hover:bg-gray-700 transition duration-300'>
                                Sign In
                            </Link>

                            <Link href={"/signup"}>
                                <ButtonKeren>
                                    Sign up
                                </ButtonKeren>
                            </Link>
                        </div>
                    )}
                </>
            )}

        </>
    );
}

export default SignInButton