import { Box, Button, Container, Divider, Grid2, Input, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const quickLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
];

const helpLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
];

const faqLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
];

const resourcesLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
];


const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    letterSpacing: '1px',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
};


export default function Footer() {
    return (
        <Container className="footer">
            <Container>
                <Box sx={{ position: 'relative', paddingTop: '120px', marginTop: '180px' }}>
                    <Box className="footer-top">
                        <Typography variant="h3" color="text.primary">STAY UPTO DATE ABOUT OUR LATEST OFFERS</Typography>
                        <Box className="footer-input-container">
                            <Input type="email" placeholder="Enter your email" className="input-email" sx={{
                                '::placeholder': {
                                    color: 'black !important',
                                    opacity: 1, // Ensures the color does not change
                                },
                            }} />
                            <Button>Subscribe</Button>
                        </Box>
                    </Box>
                </Box>
                <Grid2 container columnSpacing={{ xs: 1, sm: 2, md: 6 }} className="footer-middle">
                    <Grid2 size={3} className="footer-middle-item">
                        <Typography variant="h6" >ReStore</Typography>
                        <Typography variant="body2" >
                            ReStore is a leading online store for fashion and clothing. We are proud to offer a wide range of products for
                        </Typography>
                    </Grid2 >
                    <Grid2 size={2}>
                        <Typography variant="h6" >Quick Links</Typography>
                        {quickLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={[navStyles, { fontSize: '12px', padding: '8px 0' }]}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography variant="h6" >Help</Typography>
                        {helpLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={[navStyles, { fontSize: '12px', padding: '8px 0' }]}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </Grid2>

                    <Grid2 size={2}>
                        <Typography variant="h6" >FAQ</Typography>
                        {faqLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={[navStyles, { fontSize: '12px', padding: '8px 0' }]}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </Grid2>
                    <Grid2 size={2}>
                        <Typography variant="h6" >Resources</Typography>
                        {resourcesLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={[navStyles, { fontSize: '12px', padding: '8px 0' }]}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </Grid2>
                </Grid2>
                <Divider />
                <Box className="footer-bottom">
                    <Typography variant="body2" >
                        ReStore © 2000-2024, All rights reserved
                    </Typography>
                    <Typography variant="body2" className="footer-image-container">
                        <img src="/images/social/facebook.png" alt="facebook" />
                        <img src="/images/social/facebook.png" alt="facebook" />
                        <img src="/images/social/facebook.png" alt="facebook" />
                        <img src="/images/social/facebook.png" alt="facebook" />
                        <img src="/images/social/facebook.png" alt="facebook" />
                    </Typography>
                </Box>
            </Container>
        </Container >
    )
}
