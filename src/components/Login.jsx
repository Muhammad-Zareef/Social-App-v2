import  { useState } from 'react'
import auth from '../firebase/config'
import { useNavigate, NavLink } from 'react-router-dom'
// import { Button } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { Typography, TextField, Button, Box, Divider, Paper, Snackbar, Alert } from '@mui/material';
import GoogleAuthButton from './GoogleAuthButton';
const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");
    function handleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Login successfully", user);
            setOpen(true);
            setSeverity("success");
            setMessage("Login successfully");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setOpen(true);
            setSeverity("error");
            setMessage(errorMessage);
            console.error("Error code:", errorCode);
            console.error("Error message:", errorMessage);
        });
    }
    function handleGoogleSignIn(e) {
        e.preventDefault();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token);
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            console.log("Login", user);
            setOpen(true);
            setSeverity("success");
            setMessage("Login successfully");
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            setOpen(true);
            setSeverity("error");
            setMessage(errorMessage);
            console.error("Error code:", errorCode);
            console.error("Error message:", errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            console.error("Email error:", email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential);
        });
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    }
    return (
        <>
            <div className="container" style={{ height: "100vh", padding: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Paper elevation={5} sx={{ width: "410px", margin: "0 auto" }}>
                    <Box component="form" onSubmit={handleLogin} sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center", alignItems: "center", margin: "0 auto", p: 2, border: '1px solid grey' }}>
                        <Typography variant="h3" component="h1">Sign In</Typography>
                        <GoogleAuthButton text="Sign in with Google" handleSignIn={handleGoogleSignIn} />
                        <Divider>Or with email and password</Divider>
                        <TextField type='email' value={email} onChange={e => setEmail(e.target.value)} id="standard-basic2" label="Email" variant="standard" sx={{width: "100%"}} required />
                        <TextField type='password' value={password} onChange={e => setPassword(e.target.value)} id="standard-basic3" label="Password" variant="standard" sx={{width: "100%"}} required />
                        <Button type='submit' variant="contained" sx={{marginTop: "0.5rem"}}>Login</Button>
                        <p>Don't have account? <NavLink to="/signup" className={({isActive}) => isActive ? "active-link" : ""}>SignUp</NavLink></p>
                    </Box>
                </Paper>
            </div>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
                <Alert severity={severity} variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Login
