import React, { useState } from 'react'
import { IconButton, Drawer, Box, List, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const MenuBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

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
    return (
        <>
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
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='right'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}>
                <Box p={2} width='280px' role='presentation' sx={{
                    backgroundColor: '#FFFF',
                    height: "7rem",
                }}>
                    <List>
                        <ListItemButton href="/">
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton href="/about">
                            <ListItemText primary="About" />
                        </ListItemButton>
                        <ListItemButton href="/projects">
                            <ListItemText primary="Projects" />
                        </ListItemButton>

                    </List>
                </Box>

            </Drawer>
        </>
    )
}

export default MenuBar