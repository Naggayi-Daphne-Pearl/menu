import React, { useState } from 'react';
import { AppBar, Toolbar, Paper, Grid, Typography, Container, Drawer, IconButton, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { Menu, Home, BakeryDining } from '@mui/icons-material';

function NavBar() {
    // Nav Links
    const navLinks = [
        { text: 'Home', links: '/' },
        { text: 'Menu', links: '/menu' },
        { text: 'Orders', links: '/orders' },
        { text: 'Cart', links: '/cart' },


    ]


    const smallNavLinks = [
        { text: 'Home', links: '/' },
        { text: 'Menu', links: '/menu' },
        { text: 'Orders', links: '/orders' },
        { text: 'Cart', links: '/cart' },

    ]

    // handling closing and opening the menu bar 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)



    return (
        <AppBar position='sticky'
            elevation={0}
            sx={{
                backgroundColor: '#fff',
                width: '100%',
                color: "#2E2E2E",
            }}>
            <Container maxWidth="xl">
                <Toolbar sx={{
                    margin: { xs: '0px 0px 0px 0px', sm: '0px 0px 0px 0px', md: '0px 20px 0px 20px', lg: '0px 40px 0px 40px', xl: '0px 40px 0px 40px' },
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography
                        variant='h5'
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            flexGrow: 1,
                            fontWeight: 900,
                            color: 'var(--clr-grey-1)',
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                        }}
                    >
                        Dasher Bakeries</Typography>
                    {/* For Large Screens */}
                    {navLinks.map((item, index) => (
                        <div key={index}>
                            <Typography
                                // href={item.links}
                                variant="h5"
                                noWrap
                                component="a"
                                href={item.links}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'none', lg: 'flex' },
                                    flexGrow: 1,
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'var(--clr-grey-1)',
                                    textDecoration: 'none',
                                }}>
                                {item.text}
                            </Typography>
                        </div>

                    ))}

                    {/* For Small Screen */}
                    <IconButton
                        onClick={() => setIsDrawerOpen(true)}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='logo'
                        sx={{
                            margin: '0px 0px 0px 1px',
                            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
                        }}>
                        <Menu />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}>
                        <Box p={2} width='280px' role='presentation'>
                            {smallNavLinks.map((item, index) => (
                                <div key={index}>
                                    <List>
                                        <ListItem>
                                            <ListItemButton href={item.links}>
                                                <ListItemText primary={item.text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            ))}

                        </Box>

                    </Drawer>





                </Toolbar>

            </Container>


        </AppBar >
    )
}


const iconStyle = {
    color: "#2E2E2E",
    marginTop: '6px',
    width: '25px',
    height: '25px',
    verticalAlign: 'middle',
}
const textStyle = {
    color: '#2E2E2E',
    fontSize: '18px',
}
export default NavBar;