import React from 'react'
import { AppBar, Box, Toolbar, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '1rem',
    height: '1rem',
    borderRadius: '1rem'
});
const NavBar = () => {
    return (
        <Box>
            <AppBar position="static" elevation={1}
                sx={{
                    backgroundColor: '#fff',
                    width: '100%',
                    color: "#2E2E2E",
                }}>
                <Toolbar sx={{
                    // margin: { xs: '0px 0px 0px 0px', sm: '0px 0px 0px 0px', md: '0px 20px 0px 20px', lg: '0px 40px 0px 40px', xl: '0px 40px 0px 40px' },
                    // display: 'flex',
                    // alignContent: 'center',
                    // justifyContent: 'center',
                }}>
                    <Grid container spacing={12} style={{
                        display: 'flex',
                    }}>
                        <Grid item xs={10} lg={4}>
                            <Typography variant='h5' sx={{ ml: 6 }}>Naggayi Daphne Pearl</Typography>
                        </Grid>
                        <Grid item lg={8} style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <Link to="/" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display:{xs:'none', lg:'block'} }}>Home</Typography></Link>
                            <Link to="/about" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8, display:{xs:'none', lg:'block'} }}>About</Typography></Link>
                            <Link to="/projects" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8,  display:{xs:'none', lg:'block'}  }}>Projects</Typography></Link>
                            <Link to="/" style={{ textDecoration: "none" }}><Typography variant='h6' sx={{ mr: 8,  display:{xs:'none', lg:'block'} }}>Resume</Typography></Link>
                        </Grid>
                    </Grid>
                </Toolbar>

            </AppBar>

        </Box>

    )
}

export default NavBar