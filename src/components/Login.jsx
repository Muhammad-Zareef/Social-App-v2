import  { useState } from 'react'
import auth from '../firebase/config'
import { signInWithEmailAndPassword  } from "firebase/auth";
import { Typography, TextField, Button, Box } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Login successfully", user);
            setEmail("");
            setPassword("");
            window.location.href = '/home';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }
    return (
        <Box component="form" onSubmit={handleLogin} sx={{ maxWidth: "330px", display: "flex", flexDirection: "column", gap: "1.5rem", justifyContent: "center", alignItems: "center", margin: "0 auto", p: 2, border: '1px solid grey' }}>
            <Typography variant="h3" component="h1">Login</Typography>
            <TextField type='email' value={email} onChange={e => setEmail(e.target.value)} id="standard-basic2" label="Email" variant="standard" sx={{width: "100%"}} required />
            <TextField type='password' value={password} onChange={e => setPassword(e.target.value)} id="standard-basic3" label="Password" variant="standard" sx={{width: "100%"}} required />
            <Button type='submit' variant="contained" sx={{marginTop: "0.5rem"}}>Login</Button>
        </Box>
    )
}

export default Login
