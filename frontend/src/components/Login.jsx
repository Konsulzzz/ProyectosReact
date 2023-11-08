import React, { useState } from 'react';
import {
    Grid,
    Paper,
    Box,
    TextField,
    Button,
    Avatar,
    Typography,
} from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
            fetch(`http://localhost:3030/login?user=${username}&password=${password}`)
                .then(response => response.json())
                .then(response => {
                    if (response) {
                        console.log(response);
                    }
                })
                .catch(error => {
                    console.error('Error during fetch:', error.message);
                });
       
            /*
            fetch(`http://localhost:3030/`)
            .then(response => response.json())
            .then(response => {
                if (response) {
                    console.log(response.message)
                }
            })*/ 

    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
                <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                    <Avatar />
                    <Typography variant="h5">Login</Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Usuario"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        type="password"
                        label="Contraseña"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Acceder
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default Login;