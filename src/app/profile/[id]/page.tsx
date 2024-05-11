"use client"

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LampContainer } from '@/components/ui/LampEffect'
import { getServerSession } from 'next-auth'
import { motion } from "framer-motion";
import React from 'react'
import { useSession } from 'next-auth/react';

interface ProfileParam {
    params: {
        id: string
    }
}

const page = (props: ProfileParam) => {
    const { id } = props.params
    const { data: session } = useSession()

    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl max-w-7xl"
            >
                {session?.user.name}
            </motion.h1>
        </LampContainer>
    )
}

export default page