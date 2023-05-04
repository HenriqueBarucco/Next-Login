import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import nookies from "nookies";
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    /* 
    if (router.pathname !== "/auth/signin") {
        if (!session) {
            signOut();
        }
    } */

    if (router.pathname === "/auth/signin") {
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }

    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

/* MyApp.getInitialProps = async ({ Component, ctx }) => {
    //let { session } = nookies.get(ctx);
    const session = 

    if (!session) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps,
            session,
        };
    }

    session = JSON.parse(session);

    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return {
        pageProps,
        session,
    };
}; */

export default MyApp;
