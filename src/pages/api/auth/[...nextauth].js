import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { setCookie } from "nookies";

const authOptions = (req, res) => {
    return {
        providers: [
            CredentialsProvider({
                async authorize(credentials) {
                    try {
                        /* const response = await axios.post(
                            `${process.env.IEPT_API}/auth/login`,
                            {
                                username: credentials.username,
                                password: credentials.password,
                            }
                        );

                        setCookie(
                            { res },
                            "session",
                            JSON.stringify(response.data),
                            {
                                maxAge: 1 * 24 * 60 * 60,
                                path: "/",
                            }
                        ); */
                        return { name: "Henrique" };
                        //return response.data;
                    } catch (error) {
                        if (error.response == undefined) {
                            throw new Error(404);
                        }
                        throw new Error(error.response.data.status);
                    }
                },
            }),
        ],
        callbacks: {
            async signIn({ user, account, profile, email, credentials }) {
                console.log("Usuário logado:", user.name);
                return true;
            },
        },
        pages: {
            signIn: "/auth/login",
            error: "/auth/login",
        },
    };
};

export default (req, res) => {
    return NextAuth(req, res, authOptions(req, res));
};
