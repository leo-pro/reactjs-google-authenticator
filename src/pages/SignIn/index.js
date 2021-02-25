import React, { useState } from 'react';
import Link from '@material-ui/core/Link';

import {
  Avatar,
  CssBaseline,
  Box,
  Grid,
  Typography,
  Container,
  Paper
} from '@material-ui/core';

import ButtonSignInGoogle from '../../components/ButtonSignInGoogle';
import Dashboard from '../../pages/Dashboard';

import { useStyles } from './styles';

export default function SignIn() {
  const styles = useStyles();

  const [isSigned, setIsSigned] = useState(false);
  const [userProfile, setUserProfile] = useState([])

  const signIn = (userData) =>{
    setIsSigned(true);
    setUserProfile(userData.user);
  }

  const logout = () => {
    setIsSigned(false);
    setUserProfile(null);
  };
  return (
    <>
    { isSigned ? (<Dashboard userProfile logout/>) :
      
      (<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={1} style={{ padding: '0 2rem 2rem 2rem' }}>
          <div className={styles.paper}>
            <Avatar className={styles.avatar}>
            </Avatar>
            <Typography component="h1" variant="h5" style={{ textAlign: 'center'}}>
              Clique para fazer Login com sua conta do Google
            </Typography>
          </div>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={styles.grid}
          >
            <ButtonSignInGoogle signIn></ButtonSignInGoogle>
          </Grid>
          <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Made with ReactJS by '}
              <Link color="inherit" href="https://devleo.com.br">
                { 'Leonardo Alves' }
              </Link>{' '}
            </Typography>
          </Box>
        </Paper>
      </Container>
    )}
  </>
  );
}