import React from 'react';
import classes from './AuthForm.module.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

function AuthForm() {
  return (
    <div>
      <Container className={classes.container} maxWidth="xs">
        <h2 className={classes.title}>LOGIN</h2>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4} md={8}>
              <Item>Email</Item>
            </Grid>
            <Grid item xs={8} md={4}>
              <input type="email" className={classes.input} />
            </Grid>
            <Grid item xs={4} md={4}>
              <Item>Password</Item>
            </Grid>
            <Grid item xs={8} md={8}>
              <input type="password" className={classes.input} />
            </Grid>
            <Grid item xs={7.5} md={7.5}>
              <Button
                variant="contained"
                color="success"
                className={classes.button}
                size="small"
                end={MdPhone}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default AuthForm;
