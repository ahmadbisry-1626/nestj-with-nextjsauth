import { Input } from '@nextui-org/input'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const HeroSection = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="h-[700px] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center wrapper gap-6">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4">
                        Ahmad Suganda
                    </p>
                    <span className="text-gray-50 text-xl text-center max-w-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore explicabo molestiae accusamus. Atque iste consectetur autem mollitia quae vero minima molestias maiores, esse dignissimos fugit reprehenderit eligendi molestiae nobis!
                    </span>
                    <Input variant="flat" label="Search..." className="max-w-5xl" endContent={<BiSearchAlt className="w-8 h-8 text-gray-500" />} />
                </div>
            </div>
        </div>
    )
}

export default HeroSection