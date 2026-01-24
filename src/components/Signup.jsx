import  { useState } from 'react'
import auth from '../firebase/config'
import { useNavigate, NavLink } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { Typography, TextField, Button, Box, Divider, Paper, Snackbar, Alert } from '@mui/material';
import GoogleAuthButton from './GoogleAuthButton';
const provider = new GoogleAuthProvider();

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    function handleSignup(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User created", user);
            setOpen(true);
            setSeverity("success");
            setMessage("Account created successfully");
            setName("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
                navigate('/');
            }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setOpen(true);
            setSeverity("error");
            setMessage(errorMessage);
            console.error(errorCode);
            console.error(errorMessage);
        });
    }
    function handleGoogleSignUp(e) {
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
            // window.location.href = '/home';
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
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
                    <Box component="form" onSubmit={handleSignup} sx={{ display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center", alignItems: "center", margin: "0 auto", p: 2, border: '1px solid grey' }}>
                        <Typography variant="h3" component="h1">Sign Up</Typography>
                        <GoogleAuthButton text="Sign up with Google" handleSignIn={handleGoogleSignUp} />
                        <Divider>Or with email and password</Divider>
                        <TextField type='text' value={name} onChange={e => setName(e.target.value)} id="standard-basic1" label="Name" variant="standard" sx={{width: "100%"}} required />
                        <TextField type='email' value={email} onChange={e => setEmail(e.target.value)} id="standard-basic2" label="Email" variant="standard" sx={{width: "100%"}} required />
                        <TextField type='password' value={password} onChange={e => setPassword(e.target.value)} id="standard-basic3" label="Password" variant="standard" sx={{width: "100%"}} required />
                        <Button type='submit' variant="contained" sx={{marginTop: "0.5rem"}}>Sign Up</Button>
                        <p>Already Have Account? <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>SignIn</NavLink></p>
                    </Box>
                </Paper>
            </div>
            <Snackbar open={open} onClose={handleClose} autoHideDuration={2500}>
                <Alert severity={severity} variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Signup
