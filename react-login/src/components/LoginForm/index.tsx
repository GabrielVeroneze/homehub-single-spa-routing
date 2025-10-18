import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    TextField,
} from '@mui/material'

const LoginForm = () => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                pt: 4,
                pb: 2,
                width: '100%',
            }}
        >
            <TextField id="email" label="Email" variant="standard" />
            <TextField id="password" label="Password" variant="standard" />
            <FormControlLabel
                label="Lembrar-me"
                control={
                    <Checkbox
                        defaultChecked
                        sx={{
                            '&.Mui-checked': {
                                color: '#9C27B0',
                            },
                        }}
                    />
                }
                sx={{
                    color: '#00000099',
                }}
            />
            <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: '#9C27B0' }}
            >
                Login
            </Button>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" variant="body2" color="#9C27B0">
                    Criar conta
                </Link>
                <Link href="#" variant="body2" color="#9C27B0">
                    Esqueceu a senha?
                </Link>
            </Box>
        </Box>
    )
}

export default LoginForm
