import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) =>
            req.nextUrl.pathname?.slice(0, 5) === "/api/" ||
            req.nextUrl.pathname === "/auth/login" ||
            req.nextUrl.pathname === "/auth/recovery" ||
            req.nextUrl.pathname === "/favicon.ico" ||
            !!token,
    },
});
