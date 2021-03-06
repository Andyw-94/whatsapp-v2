import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components"
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo
                    src="https://www.crustys.com/wp-content/uploads/2016/12/whatsapp-logo-PNG-Transparent.png"
                    alt="" 
                />
                <Button variant="outlined" onClick={signIn}>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
    background-color: #fff;
`;

const Logo = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
`;