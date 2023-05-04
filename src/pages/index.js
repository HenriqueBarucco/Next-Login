import { Button, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
    const session = useSession();
    if (session?.data) {
        return (
            <>
                <Head>
                    <title>Tela Inicial</title>
                </Head>
                <Typography variant="h3" fontWeight={800}>
                    Usuário Logado
                </Typography>
                <Typography variant="h6">
                    Nome: {session.data.user.name}
                </Typography>
                <Button onClick={() => signOut()}>Sair</Button>
            </>
        );
    }
}
