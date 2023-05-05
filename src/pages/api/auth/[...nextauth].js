import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const authOptions = (req, res) => {
    return {
        providers: [
            CredentialsProvider({
                async authorize(credentials) {
                    try {
                        const response = await axios.post(
                            `${process.env.AUTH_API}/auth/login`,
                            {
                                email: credentials.email,
                                password: credentials.password,
                            }
                        );

                        console.log(response.data);
                        return response.data;
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
