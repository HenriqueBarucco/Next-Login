import Head from "next/head";
import { Box, Button, Container, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();

    return (
        <>
            <Head>
                <title>Tela Inicial</title>
            </Head>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h3" fontWeight={800}>
                        Bem-vindo ao Vacina TRacker
                    </Typography>
                    <Typography variant="subtitle1">
                        Acompanhe a sua vacinação e a de seus familiares
                    </Typography>
                </Box>
                {status === "authenticated" && (
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Olá, {session.user.name}!
                        </Typography>
                        <Button variant="outlined" onClick={() => signOut()}>
                            Sair
                        </Button>
                    </Box>
                )}
            </Container>
        </>
    );
}
