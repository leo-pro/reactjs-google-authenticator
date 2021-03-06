import React from 'react';

import { 
  Container,
  CssBaseline,
  Paper,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';

import ProjectInfo from '../ProjectInfo';

import {useStyles} from './styles';

function Profile({user, logout}){
  const styles = useStyles();
  const {name, email, imageUrl} = user;

  return(
    <>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Paper elevation={1} className={styles.profile}>
          <div className={styles.paper}>
            <Avatar src={`${imageUrl}?.jpg`} className={styles.avatar} alt={name}>
            </Avatar>
            <Typography component="h1" variant="h6" style={{ textAlign: 'center'}}>
              Olá, {name}
            </Typography>
            <p className={styles.p}> 
               {email}
            </p>
            <Button size="medium" onClick={logout} style={{fontWeight: 600, background: '#0A84FF', color:'#ffffff'}}>Sair</Button>
          </div>
        </Paper>  
      </Container>

      <ProjectInfo />
    </>
  )
}

export default Profile;