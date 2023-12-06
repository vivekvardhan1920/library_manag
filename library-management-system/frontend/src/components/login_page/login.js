import * as React from 'react';
import { Slide } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, forwardRef } from 'react';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref}{...props} />
});

function LoginDialog({ open, handleClose, handleSubmit }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (event) => {
        event.preventDefault()
        handleSubmit(username, password)

    };

    const handleEnterKeyDown = (event) => {
        if (event.key === "Enter") {
            onSubmit(event)
        }
    };

    return (

        <Dialog open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            onKeyDown={handleEnterKeyDown}
        >
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter you Credentials to Read the books
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Username"
                    label="Username"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="Password"
                    label="Password"
                    type="Password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button varient="text" onClick={handleClose}>Cancel</Button>
                <Button varient="contained" type="submit" onClick={onSubmit}>SignIn</Button>
            </DialogActions>
        </Dialog>

    );
}

export default LoginDialog;