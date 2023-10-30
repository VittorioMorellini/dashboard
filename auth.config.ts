import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
    providers: [],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            console.log('I am in authorizeDDDD')
            //console.log({nextUrl})
            console.log({auth})
            let isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            console.log({isLoggedIn})
            console.log({isOnDashboard})
            //TODO
            isLoggedIn = true
            if (isOnDashboard) {
                console.log('I am in isOnDashboard')
                //TODO
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                console.log('I am in logged in')
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            //return Response.redirect(new URL('/dashboard', nextUrl));
            return true;
        },
    },
} satisfies NextAuthConfig;