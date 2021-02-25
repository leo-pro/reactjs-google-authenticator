import React, {useState} from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Avatar,
  Grid,
  Box,
  Link
} from '@material-ui/core';

import Profile from './components/Profile';
import SignInGoogle from './components/SignInGoogle';

import { useStyles } from './styles/global.js';

function App() {
  const styles = useStyles();

  const [isSigned, setIsSigned] = useState(false);
  const [userProfile, setUserProfile] = useState([])

  const signIn = (userData) =>{
    setIsSigned(true);
    setUserProfile(userData);
  }

  const logout = () => {
    setIsSigned(false);
    setUserProfile('');
  };

  return (
  <>
    { isSigned ? (
        <Profile user={userProfile} logout={logout}/>
      ) : (
        <Container component="main" maxWidth="xs">
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
              <SignInGoogle signIn={signIn}/>
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

export default App;
