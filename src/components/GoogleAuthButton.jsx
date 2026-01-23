import React from 'react'
import  { useState } from 'react'
import auth from '../firebase/config'
import { GoogleAuthProvider } from "firebase/auth";
import { Button } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
const provider = new GoogleAuthProvider();

const GoogleAuthButton = ({ text, handleSignIn }) => {
    return (
        <Button fullWidth variant="outlined"  onClick={handleSignIn} sx={{ textTransform: "none", marginTop: "0.5rem", py: 1.2 }}>
            {text}
        </Button>
    )
}

export default GoogleAuthButton
