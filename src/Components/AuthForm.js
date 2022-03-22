import React from 'react';
import classes from './AuthForm.module.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

function AuthForm() {
  
  return (
    <div>
      <Container className={classes.container} maxWidth="xs">
        <Box>
        <Grid container spacing={2}>
        <Grid item xs={4} md={8}>
          <Item>Email</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <input type="email" className={classes.input}/>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>Password</Item>
        </Grid>
        <Grid item xs={8} md={8}>
        <input type="text" className={classes.input}/>
        </Grid>
      </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AuthForm;
