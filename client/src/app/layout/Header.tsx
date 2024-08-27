import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const midLinks = [
    { title: 'Catalog', path: '/catalog' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' }
];

const rightLinks = [
    { title: 'Login', path: '/login' },
    { title: 'Register', path: '/register' },
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
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position='static' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography
                        variant='h6'
                        component={NavLink}
                        to='/'
                        sx={navStyles}
                    >
                        Re-Store
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                    />
                </Box>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={[navStyles, { fontSize: '12px' }]}
                        >
                            {title}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent='4' color='secondary'>
                            <ShoppingCart />
                        </Badge>

                    </IconButton>

                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={[navStyles, { fontSize: '12px' }]}
                            >
                                {title}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar >
    )
}
