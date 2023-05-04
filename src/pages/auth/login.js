import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#ffffff",
        },
    },
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        color: "#ffffff",
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiInputBase-root": {
                        color: "white",
                    },
                    "& label": {
                        color: "white",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#8c8c8c",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#660066",
                    },
                },
            },
        },
    },
});

const styles = {
    container: {
        background: "white",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    },
};

export default function SignIn() {
    const router = useRouter();
    const error = router.query.error;

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        await signIn("credentials", {
            username: data.get("username"),
            password: data.get("password"),
            callbackUrl: "/",
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={styles.container}>
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{
                        display: "block",
                        width: "100%",
                        background: "#000066",
                        padding: "25px",
                        borderRadius: "5px",
                    }}
                >
                    <CssBaseline />
                    <Box
                        sx={{
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h2"
                            textAlign="center"
                            fontWeight={800}
                            color={"#aa19aa"}
                        >
                            ACESSO
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="E-Mail"
                                name="username"
                                autoComplete="current-username"
                                autoFocus
                                style={{
                                    color: "white",
                                    borderColor: "white",
                                }}
                                InputProps={{
                                    style: { color: "white" },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Senha"
                                name="username"
                                autoComplete="current-username"
                                autoFocus
                                style={{
                                    color: "white",
                                    borderColor: "white",
                                }}
                                InputProps={{
                                    style: { color: "white" },
                                }}
                            />
                            <Typography variant="subtitle1" textAlign="center">
                                {error == 403
                                    ? "Usuário ou senha inválido."
                                    : error == 404
                                    ? "API indisponível."
                                    : null}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                textAlign="center"
                                color={"white"}
                            >
                                Esqueceu a Senha?
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Conectar
                            </Button>
                            <Typography
                                variant="subtitle1"
                                textAlign="center"
                                color={"white"}
                            >
                                Não tem uma conta? Cadastre-se
                            </Typography>
                            <Typography
                                variant="caption"
                                textAlign="center"
                                color={"#b3b3b3"}
                            >
                                Vacina TRacker - Todos os Direitos Reservados
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}
