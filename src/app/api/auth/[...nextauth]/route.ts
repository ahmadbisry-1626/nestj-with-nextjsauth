import { Backend_URL } from "@/lib/constans";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'penuh kesadaran',
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "aduhmamae@gmail.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },

            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null
                const { email, password } = credentials;

                const res = await fetch(Backend_URL + "/auth/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                if (res.status === 401) {
                    console.log(res.statusText)

                    return null
                }

                const user = await res.json()
                return user;
            }

        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user }

            return token
        },

        async session({ token, session }) {
            session.user = token.user;
            session.backendToken = token.backendToken;

            return session;
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };