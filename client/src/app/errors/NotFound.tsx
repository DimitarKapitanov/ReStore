import { Box, Button, Container, createTheme, CssBaseline, Divider, ThemeProvider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
    const customTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#3f51b5',
            },
            background: {
                default: '#ffffff',
            },
            text: {
                primary: '#000000',
            },
        },
    });

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Container >
                <img src='/images/errors/404Graphic_withType.webp' alt='Not found' style={{ maxWidth: '100%', height: 'auto', marginBottom: 20 }} />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h3' gutterBottom>Oops - we could not find what you are looking for</Typography>
                    <Divider />
                    <Button component={Link} to='/catalog'>Go back to shop</Button>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
