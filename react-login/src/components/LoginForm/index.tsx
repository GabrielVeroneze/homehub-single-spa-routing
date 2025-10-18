import { Box, Button, TextField } from '@mui/material'

const LoginForm = () => {
    return (
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField id="email" label="Email" variant="standard" />
            <TextField id="password" label="Password" variant="standard" />
            <Button variant="contained" size="large">
                Login
            </Button>
        </Box>
    )
}

export default LoginForm
