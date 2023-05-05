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
import Link from "next/link";
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
                        color: "#808080",
                    },
                    "& label": {
                        color: "white",
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#e6e6e6",
                    },
                    "&:hover .MuiInput-underline:before": {
                        borderBottomColor: "#aa19aa",
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await signIn("credentials", {
            username: data.get("email"),
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
                        background: "#0a0362",
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
                            textAlign: "center",
                            padding: "0px 25px 0px 25px",
                        }}
                    >
                        <Typography
                            variant="h2"
                            textAlign="center"
                            fontWeight={800}
                            color={"#7623ac"}
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
                                variant="standard"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-Mail"
                                name="email"
                                autoComplete="current-email"
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
                                variant="standard"
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
                            <Link href={"/auth/recovery"}>
                                <Typography
                                    variant="subtitle1"
                                    textAlign="center"
                                    color={"white"}
                                    sx={{ cursor: "pointer" }}
                                >
                                    Esqueceu a Senha?
                                </Typography>
                            </Link>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, background: "#0fadc0" }}
                            >
                                Conectar
                            </Button>
                            <Link href={"/auth/signup"}>
                                <Typography
                                    variant="subtitle1"
                                    textAlign="center"
                                    color={"white"}
                                >
                                    Não tem uma conta? Cadastre-se
                                </Typography>
                            </Link>
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
